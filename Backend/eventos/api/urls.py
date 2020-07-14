from django.urls import path 
from rest_framework.urlpatterns import format_suffix_patterns
from .views import EventList, EventDetail
    
urlpatterns = [
    path('evento/', EventList.as_view()),
    path('evento/<int:pk>/',EventDetail.as_view()),
     
]
urlpatterns = format_suffix_patterns(urlpatterns)