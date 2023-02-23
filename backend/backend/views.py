from django.shortcuts import render
from django.conf import settings
#import os
from django.templatetags.static import static

def index(request):
   # path = settings.MEDIA_ROOT
    #img_list=os.listdir(path+"/images")
   # context ={'images' : img_list}

    return render(request, "index.html")