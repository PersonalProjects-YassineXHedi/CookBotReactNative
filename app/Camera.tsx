import { CameraPictureOptions, CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { router } from 'expo-router';
import React, { useRef, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CameraScreen() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView>(null);
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>We need your permission to show the camera</Text>
        <TouchableOpacity style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const takePhoto = async () => {
    if (cameraRef.current) {
      const options: CameraPictureOptions = { quality: 0.5, base64: true };
      const photo = await cameraRef.current.takePictureAsync(options);
      setPhotoUri(photo.uri);
    }
  };

  return (
    <View style={styles.container}>
      {photoUri ? (
        <View style={styles.previewContainer}>
          <Image source={{ uri: photoUri }} style={styles.preview} />
        <View style={styles.buttonRow}>
  <TouchableOpacity style={styles.retakeButton} onPress={takePhoto}>
    <Text style={styles.buttonText}>Retake</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.retakeButton} onPress={() => router.navigate('/ScanIngredients')}>
    <Text style={styles.buttonText}>Scan Ingredients</Text>
  </TouchableOpacity>
</View>
        </View>
      ) : (
        <CameraView
          ref={cameraRef}
          style={styles.camera}
          facing={facing}
          onCameraReady={() => console.log("Camera ready")}
        >
          <View style={styles.captureContainer}>
           <TouchableOpacity style={styles.captureButton} onPress={takePhoto} />
          </View>
        </CameraView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  text: { textAlign: 'center', marginBottom: 10 },
  camera: { flex: 1 },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#000000aa',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: { color: 'blue',fontSize:17,paddingBottom:65, },
  captureButton: {
  width: 70,
  height: 70,
  borderRadius: 35,
  backgroundColor: 'white',
  borderWidth: 5,
  borderColor: '#888',
},
captureContainer: {
  position: 'absolute',
  bottom: 40,
  left: 0,
  right: 0,
  alignItems: 'center',
  justifyContent: 'center',
},
  previewContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  preview: { width: '100%', height: '100%' },
  retakeButton: {
    backgroundColor: '#fffff',
  
  },
});
