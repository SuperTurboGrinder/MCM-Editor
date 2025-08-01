import { InjectionKey } from "vue";
import { Emitter } from "mitt";
import { Events } from "./eventKeys";

export const EventBusKey = Symbol() as InjectionKey<Emitter<Events>>