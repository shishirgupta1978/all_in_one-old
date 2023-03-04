from django.db import models
from django.contrib.auth import get_user_model
import os
import uuid

User = get_user_model()
# Create your models here.

class Client(models.Model):
    name = models.CharField(max_length=100,primary_key=True)
    def __str__(self):
        return self.name

class Journal(models.Model):
    name = models.CharField(max_length=100,blank=False)
    client = models.ForeignKey(Client,on_delete=models.CASCADE, related_name="journals")
    def __str__(self):
        return f'{self.name}({self.client.name})'

class Task(models.Model):
    name = models.CharField(max_length=100,primary_key=True)
    def __str__(self):
        return self.name



def get_file_path(instance, filename):
    # use the instance's ID if it is not None
    if instance.id:
        directory = instance.id
    else:
        # generate a unique directory name using uuid
        directory = uuid.uuid4().hex
    # generate a unique filename using uuid
    #filename = '{}{}'.format(uuid.uuid4().hex, os.path.splitext(filename)[1])
    # return the path where the file will be saved
    return 'taskmanage/{}/{}'.format(directory, filename)




class Task_register(models.Model):
    file=models.FileField(blank=False,upload_to =get_file_path )
    journal = models.ForeignKey(Journal,on_delete=models.CASCADE, related_name="journal")
    task= models.ForeignKey(Task,on_delete=models.CASCADE, related_name="task")
    user=models.ForeignKey(User,on_delete=models.CASCADE, related_name='user')
    registration_time=models.DateTimeField(auto_now_add=True,blank=True)
    end_time=models.DateTimeField(auto_now=True,blank=True)
    status = models.CharField(max_length=10,choices=[("START","START"),("YTS","YTS"),("DONE","DONE"),("ERROR","ERROR"),("UPLOADING","UPLOADING")],default='YTS', blank=False)
    active=models.BooleanField(default=True)

    def __str__(self):
        return str(self.id)
    def filename(self):
        return os.path.basename(self.file.name)