from django.urls import path
from .views import ShoeDetailView, ShoeListView

urlpatterns = [
    path('', ShoeListView.as_view()),
    path('<int:pk>/', ShoeDetailView.as_view())
]
