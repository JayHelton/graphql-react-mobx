import { action, computed, observable, reaction } from 'mobx';
import { observer } from 'mobx-react';
import React from 'react';

export class ThemeStore {
	@observable
	theme = 'light';

	@action
	setTheme(newTheme: string) {
		this.theme = newTheme;
	}
}

export class CounterStore {
	@observable
	count = 0;

	@action
	increment() {
		this.count++;
	}

	@action
	incrementBigly() {
		for (let i = 0; i < 10000; i++) {
			this.count++;
		}
	}

	@action
	decrement() {
		this.count--;
	}

	@computed
	get doubleCount() {
		return this.count * 2;
	}
}

const counterStore = new CounterStore();
const themeStore = new ThemeStore();

export const storesContext = React.createContext({
	counterStore,
	themeStore,
});

reaction(
	() => counterStore.count,
	(thing) => console.log('reaction:', counterStore.count, thing)
);

reaction(
	() => themeStore.theme,
	(thing) => console.log('reaction 2:', themeStore.theme, thing)
);

export const useStores = () => React.useContext(storesContext);

export const Counter = observer(() => {
	const { counterStore } = useStores();

	return (
		<>
			<div>{counterStore.count}</div>
			<button onClick={() => counterStore.increment()}>++</button>
			<button onClick={() => counterStore.decrement()}>--</button>
			<button onClick={() => counterStore.incrementBigly()}>
				+++++++++++++
			</button>
		</>
	);
});

export const ThemeToggler = observer(() => {
	const { themeStore } = useStores();

	return (
		<>
			<div>{themeStore.theme}</div>
			<button onClick={() => themeStore.setTheme('light')}>
				set theme: light
			</button>
			<button onClick={() => themeStore.setTheme('dark')}>
				set theme: dark
			</button>
		</>
	);
});

// src/App.tsx
export const App = () => (
	<main>
		<Counter />
		<ThemeToggler />
	</main>
);
