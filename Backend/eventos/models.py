from django.db import models
from alojamento.models import Alojamento

# Create your models here.

class Evento(models.Model):
    owner=models.ForeignKey(Alojamento, on_delete=models.CASCADE)
    title=models.CharField(max_length=50)
    content=models.TextField(max_length=1000)
    data=models.DateField(auto_now_add=True)
    data_do_evento=models.DateField(auto_now_add=False)
    #imegen=models.ImageField()

    def __str__(self):
        return self.title
