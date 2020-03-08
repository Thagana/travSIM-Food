import * as React from 'react';
import { Switch } from 'react-native-paper';
import { useStoreState, useStoreActions } from 'easy-peasy';

const MySwitch = () => {
    
    const toggle = useStoreActions(action => action.toggle);
    const isDark = useStoreState(state => state.isDark);
    return (
      <Switch
        value={isDark}
        onValueChange={() => toggle() }
      />
    );
}

export default MySwitch;