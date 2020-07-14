from django.urls import path 
from rest_framework.urlpatterns import format_suffix_patterns
from .views import PromotionList, PromotionDetail
    
urlpatterns = [
    path('promoçao/', PromotionList.as_view()),
    path('promoçao/<int:pk>/',PromotionDetail.as_view()),
     
]
urlpatterns = format_suffix_patterns(urlpatterns)