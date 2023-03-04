from rest_framework import serializers
from .models import  Client,Journal,Task_register,Task



class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields =('name',)


class JournalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Journal
        fields =('name','client')

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields =('name',)

class Task_registerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task_register
        fields =('file','journal','task','user','status')
