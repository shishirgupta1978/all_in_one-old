from django.contrib import admin

from .models import Enquiry


class EnquiryModel(admin.ModelAdmin):
    list_display = ["name", "email", "phone_number", "message"]


admin.site.register(Enquiry, EnquiryModel)
