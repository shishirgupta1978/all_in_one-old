from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from .models import Client,Journal,Taskname,Task_register
from .serializers import ClientSerializer,JournalSerializer,TasknameSerializer,Task_registerSerializer


class ClientViewSet(viewsets.ModelViewSet):
    queryset=Client.objects.all()
    serializer_class=ClientSerializer
    permission_classes=[IsAuthenticated]
    authentication_classes=[TokenAuthentication]


# Create your views here.
