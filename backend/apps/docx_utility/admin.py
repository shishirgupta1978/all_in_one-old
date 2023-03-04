from django.contrib import admin
from .models import Task_register,Taskname,Journal,Client

# Register your models here.
admin.site.register(Client)
admin.site.register(Journal)
admin.site.register(Taskname)

class Task_registerAdmin(admin.ModelAdmin):
    
    list_display = ["id","client", "journal","user","registration_time","end_time", "taskname", "file", "status", "active"]

    def client(self,obj):
        return obj.journal.client.name



admin.site.register(Task_register,Task_registerAdmin)