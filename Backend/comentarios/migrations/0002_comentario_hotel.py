# Generated by Django 3.0.5 on 2020-06-23 13:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('alojamento', '0005_remove_alojamento_comentarios'),
        ('comentarios', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='comentario',
            name='hotel',
            field=models.ManyToManyField(to='alojamento.Alojamento'),
        ),
    ]
