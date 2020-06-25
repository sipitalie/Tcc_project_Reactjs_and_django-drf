from django.urls import path 
from .views import avaliacao_views,AvaliacaoView
    
urlpatterns = [
    path('avaliacao',  avaliacao_views),
    path('avaliacao/register', AvaliacaoView.as_view(), name="register"),      
]