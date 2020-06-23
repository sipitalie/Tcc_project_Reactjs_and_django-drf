
from django.contrib import admin
from django.urls import path, include



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/account/',include('account.api.urls')),
    path('api/alojamentos/',include('alojamento.api.urls')),
    path('account/', include('django.contrib.auth.urls')),
    path('rest-auth/', include('rest_auth.urls')),
   
]

