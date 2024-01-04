import { useCallback, useEffect } from "react";

// set types

// stricter type for keyboard event
type ShortcutEvent = (e: KeyboardEvent) => void;

// shortcut key configuration types
type ControlKeyConfig = Pick<KeyboardEvent, 'altKey' | 'ctrlKey' | 'shiftKey'>
interface ShortcutConfig extends Partial<ControlKeyConfig> {
    code: KeyboardEvent['code'];
    callback?: HTMLElement;
}

// hook
export default function useKeyShortcut(
    event: ShortcutEvent,
    config: ShortcutConfig
) {
    const target
}