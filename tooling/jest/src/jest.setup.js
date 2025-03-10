import mockRNNetInfo from "@react-native-community/netinfo/jest/netinfo-mock.js";
import { NativeModules } from "react-native";
import mockRNDeviceInfo from "react-native-device-info/jest/react-native-device-info-mock";
import mockSafeAreaContext from "react-native-safe-area-context/jest/mock";

jest.mock("react-native-safe-area-context", () => mockSafeAreaContext);

jest.mock("react-native-config", () => ({
  APP: undefined,
  GOOGLE_SIGN_IN: undefined,
  DISABLE_ESLINT_PLUGIN: undefined,
  FACEBOOK_APP_ID: undefined,
}));
jest.mock("react-native-rate", () => ({
  AndroidMarket: { Google: undefined },
}));
jest.mock("react-native-config", () => ({
  Config: { AM_MOBILE_APP_ENVIRONMENT: "test" },
}));
jest.mock("react-native-webview", () => ({
  WebView: () => <div>Mock WebView</div>,
}));
jest.mock("@react-native-cookies/cookies", () => ({
  clearAll: jest.fn(),
}));
jest.mock("lottie-react-native", () => undefined);
jest.mock("uuid", () => ({ v4: jest.fn(() => "uuid") }));
jest.mock("react-native-localize", () => ({
  getCountry: jest.fn(() => "US"),
  getLocales: jest.fn(() => ["en-US"]),
  getTimeZone: jest.fn(() => "America/New_York"),
  uses24HourClock: jest.fn(() => true),
  getCalendar: jest.fn(() => "gregorian"),
  getCurrencies: jest.fn(() => ["USD"]),
  getLocales: jest.fn(() => ["en-US"]),
  getNumberFormatSettings: jest.fn(() => ({})),
  getTemperatureUnit: jest.fn(() => "celsius"),
  getTimeZone: jest.fn(() => "America/New_York"),
  uses24HourClock: jest.fn(() => true),
  usesAutoDateAndTime: jest.fn(() => true),
  usesAutoTimeZone: jest.fn(() => true),
  usesMetricSystem: jest.fn(() => true),
}));
jest.mock("@react-native-community/netinfo", () => mockRNNetInfo);
jest.mock("react-native-device-info", () => mockRNDeviceInfo);
jest.mock("react-native-safe-area-context", () => {
  const inset = { top: 0, right: 0, bottom: 0, left: 0 };
  return {
    SafeAreaProvider: jest.fn().mockImplementation(({ children }) => children),
    SafeAreaConsumer: jest
      .fn()
      .mockImplementation(({ children }) => children(inset)),
    SafeAreaView: jest.fn().mockImplementation(({ children }) => children),
    useSafeAreaInsets: jest.fn().mockImplementation(() => inset),
  };
});
jest.mock("@react-native-firebase/crashlytics", () => ({
  log: jest.fn(),
  recordError: jest.fn(),
  setAttribute: jest.fn(),
  setUserIdentifier: jest.fn(),
  setUserName: jest.fn(),
  setUserEmail: jest.fn(),
  setEnabled: jest.fn(),
  setCrashlyticsCollectionEnabled: jest.fn(),
  setCrashlyticsCollectionEnabled: jest.fn(),
  isCrashlyticsCollectionEnabled: jest.fn(),
  setCustomKey: jest.fn(),
  sendUnsentReports: jest.fn(),
  deleteUnsentReports: jest.fn(),
}));

jest.mock("@fullstory/react-native", () => ({
  identify: jest.fn(),
  setUserId: jest.fn(),
  setUserVars: jest.fn(),
  clearUserVars: jest.fn(),
  setDeviceId: jest.fn(),
  getCurrentSessionURL: jest.fn(),
  startSession: jest.fn(),
  restartSession: jest.fn(),
  stopSession: jest.fn(),
  logEvent: jest.fn(),
  logNavigation: jest.fn(),
  setUserAttribute: jest.fn(),
  setOnceUserAttribute: jest.fn(),
  clearUserAttribute: jest.fn(),
  setUserVarsOnce: jest.fn(),
  setHostName: jest.fn(),
  clearRecordedEvents: jest.fn(),
  enableCrashlytics: jest.fn(),
  enableConsoleLogging: jest.fn(),
  enableDebugConsole: jest.fn(),
  enableDevMode: jest.fn(),
  enableIntegration: jest.fn(),
  disableIntegration: jest.fn(),
  enableInstrumentation: jest.fn(),
  disableInstrumentation: jest.fn(),
  enableJSC: jest.fn(),
  disableJSC: jest.fn(),
  enableLogs: jest.fn(),
  disableLogs: jest.fn(),
  setEventNamespace: jest.fn(),
  getSessionURL: jest.fn(),
  getSessionId: jest.fn(),
  getSessionEventCount: jest.fn(),
  getCurrentSessionURL: jest.fn(),
  getPlaybackSessionURL: jest.fn(),
  getCurrentSessionURL: jest.fn(),
  addOnReadyListener: jest.fn(),
  addOnErrorListener: jest.fn(),
  removeOnReadyListener: jest.fn(),
  removeOnErrorListener: jest.fn(),
  onReady: jest.fn(),
  onError: jest.fn(),
  setInForeground: jest.fn(),
  isInForeground: jest.fn(),
  VERSION: "mocked-version",
}));
jest.mock("@react-navigation/core", () => ({
  ...jest.requireActual("@react-navigation/core"),
  useFocusEffect: () => jest.fn(),
  useNavigation: () => ({
    getState: () => ({ routes: [] }),
    goBack: jest.fn(),
    navigate: jest.fn(),
  }),
}));

NativeModules.RNCAsyncStorage = {
  clear: jest.fn(),
  flushGetRequests: jest.fn(),
  getAllKeys: jest.fn(),
  getItem: jest.fn(),
  mergeItem: jest.fn(),
  multiGet: jest.fn(),
  multiMerge: jest.fn(),
  multiRemove: jest.fn(),
  multiSet: jest.fn(),
  removeChecklistItem: jest.fn(),
  setItem: jest.fn(),
};

jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter");
