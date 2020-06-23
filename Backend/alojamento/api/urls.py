from django.urls import path 
from .views import alojamentos, RegisterAlojamentoView
    
urlpatterns = [
    path('',  alojamentos),
    path('register', RegisterAlojamentoView.as_view(), name="register"),      
]