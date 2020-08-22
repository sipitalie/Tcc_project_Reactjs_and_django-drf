from django.urls import path 
from .views import GetImgList
    
urlpatterns = [
    path('imagens', GetImgList.as_view()),   
]