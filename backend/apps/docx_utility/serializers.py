from rest_framework import serializers
from .models import  Client,Journal,Task_register,Taskname



class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields =('name',)


class JournalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Journal
        fields =('name','client')

class TasknameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Taskname
        fields =('name',)

class Task_registerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Taskname
        fields =('file','journal','taskname','user','status')
