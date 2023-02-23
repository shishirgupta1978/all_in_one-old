FROM node:latest as build-deps
WORKDIR /usr/src/app
COPY ./frontend ./
RUN yarn --network-timeout 100000


RUN yarn build

FROM python:3.11.1-slim-buster
WORKDIR /usr/src/app

ENV PYTHONDONTWRITEBYTECODE 1

ENV PYTHONUNBUFFERED 1

RUN apt-get update \
  && apt-get install -y build-essential \
  && apt-get install -y libpq-dev \
  && apt-get install -y gettext \
  && apt-get -y install netcat gcc postgresql \
  && apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false \
  && rm -rf /var/lib/apt/lists/*

RUN pip3 install --upgrade pip
COPY --from=build-deps /usr/src/app/build /usr/src/frontend/build
COPY ./backend ./
RUN pip3 install -r requirements.txt
RUN sed -i 's/\r$//g' ./entrypoint
RUN chmod +x ./entrypoint
RUN sed -i 's/\r$//g' ./start-api
RUN chmod +x ./start-api
RUN sed -i 's/\r$//g' ./start-celeryworker
RUN chmod +x ./start-celeryworker
RUN sed -i 's/\r$//g' ./start-flower
RUN chmod +x ./start-flower

ENTRYPOINT [ "./entrypoint" ]
