from django.db import models
from alojamento.models import Alojamento
from quartos.models import Quarto


class Promocao(models.Model):
    hotel=models.ForeignKey(Alojamento, on_delete=models.CASCADE)
    quartos_em_prom=models.ManyToManyField(Quarto)
    new_preco=models.FloatField()
    data=models.DateField(auto_now_add=True)
    valid_data=models.DateField()

    def __str__(self):
        return self.hotel.nome
    
    
    

 

