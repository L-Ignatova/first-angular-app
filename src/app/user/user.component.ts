import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

type User = {
  id: string;
  name: string;
  avatar: string;
};

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
  // this.selectedUser.set(DUMMY_USERS[this.randomIndex]);

  // computed - smth like useMemo - changes when the
  // signals used inside of it change
  // not everytime the component or the app changes

  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>(); // emit custom values through SELECT to any parent component that is interested

  // SIGNALS approach
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(() => 'assets/users/' + this.avatar());
  // select = output<string>(); // explicitly creates EventEmitter under hood

  onUserClick() {
    this.select.emit(this.user.id);
  }

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
}
