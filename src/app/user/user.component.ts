import { Component, computed, input, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // signal stores the state of a value and monitors
  // all instances of the value in the app, updates app on change
  // selectedUser = signal(DUMMY_USERS[this.randomIndex]);

  // computed - smth like useMemo - changes when the
  // signals used inside of it change
  // not everytime the component or the app changes
 
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  // SIGNALS approach
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => 'assets/users/' + this.avatar());

  onUserClick() {
    console.log('clicked!');
    // this.selectedUser.set(DUMMY_USERS[this.randomIndex]);
  }

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }
}
