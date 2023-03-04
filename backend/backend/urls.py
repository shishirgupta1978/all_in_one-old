from django.conf import settings
#from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path,re_path
from apps.users.views import CustomTokenObtainPairView
from rest_framework_simplejwt.views import TokenRefreshView
from . import views


urlpatterns = [
    path("admin/", admin.site.urls),
    path('api/auth/token/', CustomTokenObtainPairView.as_view(), name='token_obtain'),
    path('api/auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path("api/auth/", include("djoser.urls")),
    path("api/profiles/", include("apps.profiles.urls")),
    path("api/properties/", include("apps.properties.urls")),
    path("api/ratings/", include("apps.ratings.urls")),
    path("api/enquiries/", include("apps.enquiries.urls")),
 
]
#+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


admin.site.site_header = "Admin"
admin.site.site_title = "Admin Portal"
admin.site.index_title = "Welcome to administration"
