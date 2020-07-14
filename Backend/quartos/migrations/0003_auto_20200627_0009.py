# Generated by Django 3.0.5 on 2020-06-26 23:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('alojamento', '0005_remove_alojamento_comentarios'),
        ('quartos', '0002_auto_20200623_1408'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='quarto',
            name='hotel',
        ),
        migrations.AddField(
            model_name='quarto',
            name='hotel_owner',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='alojamento.Alojamento'),
            preserve_default=False,
        ),
    ]
