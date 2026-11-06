import react from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const COLORS ={
background: '#FFFFFF',
surface: '#F8FAFC',
text: '#1E293B',
secondaryText: '#64748B',
border: '#E2E8F0',
rock: '#EF4444',
paper: '#0D9488',
scissors: '#D97706',};

export default function RulesScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Game Rules 📖</Text>

            <View style={styles.card}>
                <Text style={styles.ruleText}>
                    ✊<Text style={[styles.bold,{color: COLORS.rock}]}> Rock </Text>crushes Scissors</Text>
                <Text style={styles.ruleText}>
                    ✌️<Text style={[styles.bold,{color: COLORS.scissors}]}> Scissors </Text>cuts Paper</Text>
                <Text style={styles.ruleText}>
                    ✋<Text style={[styles.bold,{color: COLORS.paper}]}> Paper </Text>covers Rock</Text>
             </View>

  <Text style={styles.description}>
    Select one of the three weapons from the main player arena. The computer will randomly select its weapon and winner is decided based on the classic rules above 
    {"n\n"}First to conquer the arena Wins!🏆
    </Text>    
 </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,    
        padding: 25,
        backgroundColor: COLORS.background,
        alignItems: 'center',
    },

    header: {
        fontSize: 24,
        fontWeight: '900',
        color: COLORS.text,
        marginBottom: 30,
        marginTop: 20,
        letterSpacing: 1,
        textAlign: 'center',
    },
    card: {
        backgroundColor: COLORS.surface,
        padding: 25,
        borderRadius: 20,
        width: '100%',
        borderWidth: 1,
        borderColor: COLORS.border,
        marginBottom: 30,
    },
    ruleText: {
        fontSize: 22,
        color: COLORS.text,
        marginVertical: 12,
        fontWeight: '600',
    },
    bold: {
        fontWeight: '900',
    },
description: {
        fontSize: 16,
        color: COLORS.secondaryText,
        lineHeight: 26,
        textAlign: 'center',
        paddingHorizontal: 10,
    }
});