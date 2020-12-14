from django.urls import path 
from django.conf.urls.static import static
from django.conf import settings
from .views import GetImgGallery, UploadImg
    
urlpatterns = [
    path('gallery', GetImgGallery.as_view()),
    path('upload/gallery', UploadImg.as_view()), 
]