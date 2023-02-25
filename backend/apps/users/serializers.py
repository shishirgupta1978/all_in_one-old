from django.contrib.auth import get_user_model
from django_countries.serializer_fields import CountryField
from djoser.serializers import UserCreateSerializer
from phonenumber_field.serializerfields import PhoneNumberField
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    phone_number = PhoneNumberField(source="profile.phone_number")
    profile_photo = serializers.CharField(source="profile.profile_photo")
    country = CountryField(source="profile.country")
    city = serializers.CharField(source="profile.city")
    top_seller = serializers.BooleanField(source="profile.top_agent")
    first_name = serializers.SerializerMethodField()
    last_name = serializers.SerializerMethodField()
    date_of_birth = serializers.SerializerMethodField()
    full_name = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "email",
            "first_name",
            "last_name",
            "full_name",
            "gender",
            "date_of_birth",
            "phone_number",
            "profile_photo",
            "country",
            "city",
            "top_seller",
        ]

    def get_first_name(self, obj):
        return obj.first_name.title()

    def get_last_name(self, obj):
        return obj.last_name.title()

    def get_full_name(self, obj):
        return obj.first_name.title() + " " + obj.last_name.title()


    def get_date_of_birth(self,obj):
        return obj.date_of_birth.strftime('%d-%m-%Y')

    
    def to_representation(self, instance):
        representation = super(UserSerializer, self).to_representation(instance)
        if instance.is_superuser:
            representation["admin"] = True
        return representation

    class CreateUserSerializer(serializers.ModelSerializer):
        class Meta(UserCreateSerializer.Meta):
            model = User
            fields = ["id", "username", "email", "first_name", "last_name", "password","gender","date_of_birth"]
