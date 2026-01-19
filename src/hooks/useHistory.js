import { useState, useCallback, useRef } from 'react';

const useHistory = (initialState) => {
  const [state, setState] = useState(initialState);
  const historyRef = useRef([initialState]);
  const indexRef = useRef(0);

  const updateState = useCallback((newState) => {
    // 清除当前索引之后的历史
    historyRef.current = historyRef.current.slice(0, indexRef.current + 1);
    // 添加新状态
    historyRef.current.push(newState);
    // 限制历史记录数量为50
    if (historyRef.current.length > 50) {
      historyRef.current.shift();
    } else {
      indexRef.current += 1;
    }
    setState(newState);
  }, []);

  const undo = useCallback(() => {
    if (indexRef.current > 0) {
      indexRef.current -= 1;
      setState(historyRef.current[indexRef.current]);
    }
  }, []);

  const redo = useCallback(() => {
    if (indexRef.current < historyRef.current.length - 1) {
      indexRef.current += 1;
      setState(historyRef.current[indexRef.current]);
    }
  }, []);

  const canUndo = indexRef.current > 0;
  const canRedo = indexRef.current < historyRef.current.length - 1;

  return {
    state,
    setState: updateState,
    undo,
    redo,
    canUndo,
    canRedo,
  };
};

export default useHistory;
