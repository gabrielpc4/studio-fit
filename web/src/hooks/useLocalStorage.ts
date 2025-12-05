'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  // Usar uma função para inicialização lazy do estado
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Erro ao ler localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Ref para manter o valor atual sem causar re-renders
  const storedValueRef = useRef(storedValue);
  storedValueRef.current = storedValue;

  // Função estável para atualizar o valor
  const setValue = useCallback((value: T | ((val: T) => T)) => {
    try {
      // Permite que value seja uma função (como useState)
      const valueToStore = value instanceof Function ? value(storedValueRef.current) : value;

      setStoredValue(valueToStore);

      // Salva no localStorage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.warn(`Erro ao salvar localStorage key "${key}":`, error);
    }
  }, [key]);

  // Sincroniza quando a key muda
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.warn(`Erro ao ler localStorage key "${key}":`, error);
    }
  }, [key]);

  return [storedValue, setValue];
}
