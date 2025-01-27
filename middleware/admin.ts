

export default defineNuxtRouteMiddleware((to, from) => {
  const { data: session } = useAuth();

  if (!session || session.user.role !== 'ADMIN') {
    return navigateTo('/'); // Redirect to home if not authenticated or not an admin
  }
});