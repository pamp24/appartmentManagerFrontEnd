import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';



export const AppRoutes: Routes = [

    {path: '', 
     redirectTo:'dashboard', 
     pathMatch:'full',
     },
     {path: 'expenses',
        canActivate:[AuthGuard],
           loadChildren: () => import('./pages/expenses/expenses.routes').then(m => m.ExpensesRoutes)},
    {path: 'dashboard',
        canActivate:[AuthGuard],
           loadChildren: () => import('./pages/dashboard/dashboard.routes').then(m => m.DashboardRoutes)},

    {path: 'analytics',
        canActivate:[AuthGuard],
            loadChildren: () => import('./pages/analytics/analytics.routes').then(m => m.AnalyticsRoutes)},

    {path: 'residents',
        canActivate:[AuthGuard],
            loadChildren: () => import('./pages/residents/residents.routes').then(m => m.ResidentsRoutes)},

    {path: 'history',
        canActivate:[AuthGuard],
            loadChildren: () => import('./pages/history/history.routes').then(m => m.HistoryRoutes)},

    {path: 'profile',
        canActivate:[AuthGuard],
            loadChildren: () => import('./pages/profile/profile.routes').then(m => m.ProfileRoutes)},
            
    {path: 'support',
        canActivate:[AuthGuard],
            loadChildren: () => import('./pages/support/support.routes').then(m => m.SupportRoutes)},
            
    {path: 'login',
        loadChildren: () => import('./auth/auth.routes').then(m => m.AuthRoutes)},

];  

  
  

