from django.urls import path 
from .views import AvaliacaoList, AvaliacaoCreate
    
urlpatterns = [
    path('avaliacao',  AvaliacaoList.as_view()),
    path('avaliacao/register', AvaliacaoCreate.as_view(), name="register"),      
]