from django.urls import path
from . import views


# users/urls.py
app_name = 'users'

# accounts/urls.py
app_name = 'accounts'

urlpatterns = [

    # CRUD
    path('', views.user_list, name='user_list'),
    path('create/', views.user_create, name='user_create'),
    path('<int:user_id>/', views.user_detail, name='user_detail'),
    path('<int:user_id>/update/', views.user_update, name='user_update'),
    path('<int:user_id>/delete/', views.user_delete, name='user_delete'),

    # AUTH
    path('register/', views.register_user, name='register_user'),
    path('login/', views.login_user, name='login_user'),
    path('logout/', views.logout_user, name='logout_user'),
    path('profile/', views.user_profile, name='user_profile'),
]
