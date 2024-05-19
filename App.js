import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking, ScrollView, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Component to open LinkedIn profile
const SocialLinks = () => {
  
  const openLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/lucas-gteixeira');
  };

  const openGithub = () => {
    Linking.openURL('https://github.com/Lukgt');
  };

   const openContact = () => {
      Linking.openURL('https://wa.me/5581997131787');
  };

  return (
    <View style={styles.socialLinksContainer}>
      <TouchableOpacity onPress={openLinkedIn} style={styles.socialLink} accessibilityLabel="Open LinkedIn">
        <FontAwesome name="linkedin" style={styles.socialIcon} />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={openGithub} style={styles.socialLink} accessibilityLabel="Open GitHub">
        <FontAwesome name="github" style={styles.socialIcon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={openContact} style={styles.socialLink} accessibilityLabel="Open WhatsApp">
        <FontAwesome name="phone" style={styles.socialIcon} />
      </TouchableOpacity>

    </View>
  );
};

// Page components
const HomePage = () => {
  return (
    <View style={styles.pageContainer}>
      
        <Image
          style={styles.profileImage}
          source={require('./assets/perfil.jpg')}
        />
        <Text style={styles.nameText}>Lucas Teixeira</Text>
      
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>26 anos</Text>
          <Text style={styles.locationText}>Olinda, Pernambuco - Brasil</Text>
        </View>

        <View style={styles.linksContainer}>
          <SocialLinks /> 
        </View>

    </View>
  );
};

// Page one
const AboutPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.pageContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Sobre</Text>
        <Text style={styles.titleDecoration}>mim</Text>
      </View>
      <Text style={styles.bodyText}>Sou formado em Engenharia Civil, mas decidi fazer uma transição de carreira para a área de tecnologia. Iniciei o curso de Análise e Desenvolvimento de Sistemas na faculdade Senac - PE, no inicio de 2023 e estou atualmente no 3 périodo.</Text>
    </ScrollView>
  );
};

// Page two
const EducationPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.pageContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Educação</Text>
      </View>
      <Text style={styles.bodyText}>Formação de Análise e Desenvolvimento de Sitemas no SENAC-Recife, Pernambuco. 2023 - atualmente.</Text>
      <View style={styles.educationList}>
        <View style={styles.educationItem}>
          <FontAwesome name="circle" style={styles.dotIcon} /> 
          <Text style={styles.bodyTextSmall}>StartUp Apé - Posição: Desenvolvedor Front-end. 2023-atualmente</Text>
        </View>
        <View style={styles.educationItem}>
          <FontAwesome name="circle" style={styles.dotIcon} /> 
          <Text style={styles.bodyTextSmall}>Residencia Front-end - Softex. 02/2024-autalmente</Text>
        </View>
        <View style={styles.educationItem}>
          <FontAwesome name="circle" style={styles.dotIcon} /> 
          <Text style={styles.bodyTextSmall}>Formação acelerada Front-End - Softex. 06/2023-01/2024</Text>
        </View>
      </View>
    </ScrollView>
  );
};

// Page three
const SkillsPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.pageContainer}>
      <View style={styles.skillsTitleContainer}>
        <Text style={styles.titleDecoration}>Hard</Text>
        <Text style={styles.title}>Skills</Text>
      </View> 
      <View style={styles.skillsContainer}>
        <View style={styles.skillItem} >
          <Image style={styles.skillImage} source={require('./assets/javaScript.png')} />
          <Text style={styles.bodyTextSmall}>JavaScript</Text>
          <View style={styles.skillRating}>
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconEmpty} /> 
            <FontAwesome name="star" style={styles.starIconEmpty} /> 
          </View>
        </View>
        <View style={styles.skillItem}>
          <Image style={styles.skillImage} source={require('./assets/git.png')} />
          <Text style={styles.bodyTextSmall}>Git</Text>
          <View style={styles.skillRating}>
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconEmpty} /> 
            <FontAwesome name="star" style={styles.starIconEmpty} /> 
          </View>
        </View>
      </View>
      <View style={styles.skillsContainer}>
        <View style={styles.skillItem}>
          <Image style={styles.skillImage} source={require('./assets/reactNative.png')} />
          <Text style={styles.bodyTextSmall}>React Native</Text>
          <View style={styles.skillRating}>
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconEmpty} /> 
            <FontAwesome name="star" style={styles.starIconEmpty} /> 
            <FontAwesome name="star" style={styles.starIconEmpty} /> 
          </View>
        </View>
        <View style={styles.skillItem}>
          <Image style={styles.skillImage} source={require('./assets/nodeJs.png')} />
          <Text style={styles.bodyTextSmall}>Node JS</Text>
          <View style={styles.skillRating}>
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconEmpty} /> 
            <FontAwesome name="star" style={styles.starIconEmpty} /> 
            <FontAwesome name="star" style={styles.starIconEmpty} /> 
          </View>
        </View>
      </View>
      <View style={styles.skillsContainer}>
        <View style={styles.skillItem}>
          <Image style={styles.skillImage} source={require('./assets/mySql.png')} />
          <Text style={styles.bodyTextSmall}>MySQL</Text>
          <View style={styles.skillRating}>
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconEmpty} /> 
          </View>
        </View>
        <View style={styles.skillItem}>
          <Image style={styles.skillImage} source={require('./assets/mongoDb.png')} />
          <Text style={styles.bodyTextSmall}>Mongo DB</Text>
          <View style={styles.skillRating}>
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconEmpty} /> 
            <FontAwesome name="star" style={styles.starIconEmpty} /> 
          </View>
        </View>
      </View>
      <View style={styles.skillsTitleContainer}>
        <Text style={styles.titleDecoration}>Soft</Text>
        <Text style={styles.title}>Skills</Text>
      </View> 
      <View style={styles.skillsContainer}>
      <View style={styles.skillItem}>
          <FontAwesome name="comment" style={styles.socialIcon}/>
          <Text style={styles.bodyTextSmall}>Comunicação</Text>
          <View style={styles.skillRating}>
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconFilled} /> 
          </View>
        </View>

        <View style={styles.skillItem}>
          <FontAwesome name="users" style={styles.socialIcon}/>
          <Text style={styles.bodyTextSmall}>Trabalho em equipe</Text>
          <View style={styles.skillRating}>
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconFilled} /> 
          </View>
        </View>
        </View>
        <View style={styles.skillsContainer}>
        <View style={styles.skillItem}>
          <FontAwesome name="hourglass-start" style={styles.socialIcon}/>
          <Text style={styles.bodyTextSmall}>Pontualidade</Text>
          <View style={styles.skillRating}>
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconFilled} /> 
          </View>
        </View>

        <View style={styles.skillItem}>
          <FontAwesome name="book" style={styles.socialIcon}/>
          <Text style={styles.bodyTextSmall}>Paciência</Text>
          <View style={styles.skillRating}>
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconFilled} /> 
            <FontAwesome name="star" style={styles.starIconFilled} /> 
          </View>
        </View>
        </View>
    </ScrollView>
  );
};

// Main component
const App = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePress = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => handlePress(0)} style={styles.navbarButton} accessibilityLabel="Home">
          <FontAwesome name="home" style={styles.navbarIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress(1)} style={styles.navbarButton} accessibilityLabel="Page 1">
          <FontAwesome name="user" style={styles.navbarIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress(2)} style={styles.navbarButton} accessibilityLabel="Page 2">
          <FontAwesome name="graduation-cap" style={styles.navbarIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress(3)} style={styles.navbarButton} accessibilityLabel="Page 3">
          <FontAwesome name="wrench" style={styles.navbarIcon} />
        </TouchableOpacity>
      </View>
      {currentPage === 0 && <HomePage />}
      {currentPage === 1 && <AboutPage />}
      {currentPage === 2 && <EducationPage />}
      {currentPage === 3 && <SkillsPage />}
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#6200ea',
    paddingVertical: 20,
  },
  navbarButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbarIcon: {
    color: '#fff',
    fontSize: 24,
  },
  navbarText: {
    color: '#fff',
    fontSize: 18,
  },
  pageContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  nameText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6200ea',
  },
  locationContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  locationText: {
    fontSize: 18,
    color: '#555',
  },
  linksContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  socialLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    gap: 30,
    width: '100%',
  },
  socialLink: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIcon: {
    color: '#6200ea',
    fontSize: 36,
  },
  titleContainer: {
    flexDirection: 'row',
    gap:10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200ea',
  },
  titleDecoration: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff4081',
    marginRight: 5,
  },
  bodyText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
  educationList: {
    marginTop: 20,
    alignItems: 'flex-start',
  },
  educationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dotIcon: {
    fontSize: 12,
    color: '#6200ea',
    marginRight: 5,
  },
  bodyTextSmall: {
    fontSize: 16,
    color: '#555',
  },
  skillsTitleContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  skillsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  skillItem: {
    alignItems: 'center',
  },
  skillImage: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  skillRating: {
    flexDirection: 'row',
    marginTop: 5,
  },
  starIconFilled: {
    fontSize: 16,
    color: '#ffb300',
    marginRight: 2,
  },
  starIconEmpty: {
    fontSize: 16,
    color: '#e0e0e0',
    marginRight: 2,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
});

export default App;