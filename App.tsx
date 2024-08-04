import { Suspense } from 'react'
import 'react-native-gesture-handler';
import {
  SafeAreaProvider,
  initialWindowMetrics
} from 'react-native-safe-area-context'
import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import { AlertNotificationRoot } from 'react-native-alert-notification';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainNavigator from './src/navigations/MainNavigations';

export const queryClient = new QueryClient();

export default function App() {
  return (
    <ActionSheetProvider>
      <AlertNotificationRoot>
        <QueryClientProvider client={queryClient}>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <Suspense fallback={null}>
              <MainNavigator />
            </Suspense>
          </SafeAreaProvider>
        </QueryClientProvider>
      </AlertNotificationRoot>
    </ActionSheetProvider>
  );
}
