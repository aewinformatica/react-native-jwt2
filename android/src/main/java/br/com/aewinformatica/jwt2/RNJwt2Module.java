
package br.com.aewinformatica.jwt2;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class RNJwt2Module extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNJwt2Module(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNJwt2";
  }
}