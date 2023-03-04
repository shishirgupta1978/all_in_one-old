from django.contrib import admin
from .models import Task_register,Task,Journal,Client

# Register your models here.
admin.site.register(Client)
admin.site.register(Journal)
admin.site.register(Task)

class Task_registerAdmin(admin.ModelAdmin):
    
    list_display = ["id","client", "journal","user","registration_time","end_time", "task", "file", "status", "active"]

    def client(self,obj):
        return obj.journal.client.name



admin.site.register(Task_register,Task_registerAdmin)