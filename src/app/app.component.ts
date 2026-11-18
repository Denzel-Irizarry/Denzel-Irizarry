import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Routes } from '@angular/router';

@Component({ selector: 'app-home', templateUrl: './index.component.html' })
export class HomeComponent {}

@Component({ selector: 'app-blog', templateUrl: './blog.component.html' })
export class BlogComponent {}

@Component({ selector: 'app-contact', templateUrl: './contact.component.html' })
export class ContactComponent {
  composeEmail(event: Event, name: string, email: string, message: string): void {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:denzel_irizarry@outlook.com?subject=${subject}&body=${body}`;
  }
}

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Denzel Irizarry, Aspiring Developer' },
  { path: 'blog', component: BlogComponent, title: 'Blog | Denzel Irizarry, Aspiring Developer' },
  { path: 'contact', component: ContactComponent, title: 'Contact Me | Denzel Irizarry, Aspiring Developer' },
  { path: '**', redirectTo: '' }
];

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent {}
