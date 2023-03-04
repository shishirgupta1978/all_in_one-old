from django.conf import settings
#from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path,re_path
from apps.users.views import CustomTokenObtainPairView
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework.routers import DefaultRouter
from apps.docx_utility.views import ClientViewSet,Task_registerViewSet,TaskViewSet,JournalViewSet
from . import views

router = DefaultRouter()
router.register(r'client', ClientViewSet, basename='my_model')
router.register(r'journal', JournalViewSet, basename='my_model')
router.register(r'task', TaskViewSet, basename='task')
router.register(r'task_reg', Task_registerViewSet, basename='task_reg')



urlpatterns = [
    path("admin/", admin.site.urls),
    path('api/auth/token/', CustomTokenObtainPairView.as_view(), name='token_obtain'),
    path('api/auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path("api/auth/", include("djoser.urls")),
    path("api/profiles/", include("apps.profiles.urls")),
    path("api/properties/", include("apps.properties.urls")),
    path("api/ratings/", include("apps.ratings.urls")),
    path("api/enquiries/", include("apps.enquiries.urls")),
    path("api/docxutility/", include(router.urls)),
 
]
#+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


admin.site.site_header = "Admin"
admin.site.site_title = "Admin Portal"
admin.site.index_title = "Welcome to administration"
