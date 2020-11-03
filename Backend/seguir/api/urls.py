from django.urls import path 
from .views import SeguirRevomer,SeguidoresList
    
urlpatterns = [
    path('followers/<int:hotel_id>', SeguidoresList.as_view()),
    path('follow/',SeguirRevomer.as_view()),    
]