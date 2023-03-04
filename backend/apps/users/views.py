from .serializers import MyTokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class CustomTokenObtainPairView(TokenObtainPairView):

    serializer_class = MyTokenObtainPairSerializer
    token_obtain_pair = TokenObtainPairView.as_view()
