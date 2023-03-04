from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from .models import Client,Journal,Task,Task_register
from .serializers import ClientSerializer,JournalSerializer,TaskSerializer,Task_registerSerializer


class ClientViewSet(viewsets.ModelViewSet):
    queryset=Client.objects.all()
    serializer_class=ClientSerializer
    permission_classes=[IsAuthenticated]
    authentication_classes=[TokenAuthentication]

class JournalViewSet(viewsets.ModelViewSet):
    queryset=Journal.objects.all()
    serializer_class=JournalSerializer
    permission_classes=[IsAuthenticated]
    authentication_classes=[TokenAuthentication]

class TaskViewSet(viewsets.ModelViewSet):
    queryset=Task.objects.all()
    serializer_class=TaskSerializer
    permission_classes=[IsAuthenticated]
    authentication_classes=[TokenAuthentication]

class Task_registerViewSet(viewsets.ModelViewSet):
    queryset=Task_register.objects.all()
    serializer_class=Task_registerSerializer
    permission_classes=[IsAuthenticated]
    authentication_classes=[TokenAuthentication]

# Create your views here.
