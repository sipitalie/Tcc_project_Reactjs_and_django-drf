
from django.contrib import admin
from django.urls import path, include



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/account/',include('account.api.urls')),


    path('api.v1/',include('alojamento.api.urls')),
    path('api.v1/',include('avaliacao.api.urls')),
    path('api.v1/',include('comentarios.api.urls')),
    path('api.v1/',include('eventos.api.urls')),
    path('api.v1/',include('promocoes.api.urls')),
    path('api.v1/',include('quartos.api.urls')),
    path('api.v1/',include('reclamacoes.api.urls')),


    path('account/', include('django.contrib.auth.urls')),
    path('rest-auth/', include('rest_auth.urls')),
   
]

