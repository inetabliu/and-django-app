# Generated by Django 3.2.6 on 2021-08-18 12:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shoes', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='shoe',
            name='picture',
            field=models.ImageField(default=None, upload_to=''),
        ),
        migrations.AddField(
            model_name='shoe',
            name='price',
            field=models.FloatField(default=None),
        ),
        migrations.AlterField(
            model_name='shoe',
            name='model_name',
            field=models.CharField(max_length=200, unique=True),
        ),
    ]
