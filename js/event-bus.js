const EventBus = {
  listeners: {},
  on(evento, callback) {
    if (!this.listeners[evento]) this.listeners[evento] = [];
    this.listeners[evento].push(callback);
  },
  emit(evento, dados) {
    if (this.listeners[evento]) {
      this.listeners[evento].forEach(cb => cb(dados));
    }
  }
};