from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required

from .models import User
from .forms import UserRegistrationForm, UserUpdateForm


# -------------------------
# CRUD
# -------------------------

def user_list(request):
    users = User.objects.all()
    return render(request, 'users/user_list.html', {'users': users})


def user_detail(request, user_id):
    user = get_object_or_404(User, id=user_id)
    return render(request, 'users/user_detail.html', {'user': user})


def user_create(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Usuario creado correctamente.")
            return redirect('users:user_list')
    else:
        form = UserRegistrationForm()

    return render(request, 'users/user_form.html', {'form': form})


def user_update(request, user_id):
    user = get_object_or_404(User, id=user_id)

    if request.method == 'POST':
        form = UserUpdateForm(request.POST, instance=user)
        if form.is_valid():
            form.save()
            messages.success(request, "Usuario actualizado.")
            return redirect('users:user_detail', user_id=user.id)
    else:
        form = UserUpdateForm(instance=user)

    return render(request, 'users/user_form.html', {'form': form})


def user_delete(request, user_id):
    user = get_object_or_404(User, id=user_id)
    user.delete()
    messages.success(request, "Usuario eliminado.")
    return redirect('users:user_list')


# -------------------------
# AUTENTICACIÓN
# -------------------------

def register_user(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Cuenta creada correctamente.")
            return redirect('users:login_user')
    else:
        form = UserRegistrationForm()
    return render(request, 'users/register.html', {'form': form})


def login_user(request):
    if request.method == 'POST':
        username = request.POST.get("username")  # Login estándar
        password = request.POST.get("password")

        user = authenticate(request, username=username, password=password)

        if user:
            login(request, user)
            return redirect('users:user_profile')
        else:
            messages.error(request, "Credenciales incorrectas.")

    return render(request, 'users/login.html')


def logout_user(request):
    logout(request)
    return redirect('users:login_user')


@login_required
def user_profile(request):
    return render(request, 'users/profile.html')
