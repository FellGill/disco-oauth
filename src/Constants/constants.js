module.exports = {
    api_base: 'https://discordapp.com/api/',
    perms_const: {
        // General perms
        0x1:'CREATE_INSTANT_INVITE',
        0x2:'KICK_MEMBERS',
        0x4:'BAN_MEMBERS',
        0x8:'ADMINISTRATOR',
        0x10:'MANAGE_CHANNELS',
        0x20:'MANAGE_GUILD',
        0x40:'ADD_REACTIONS',
        0x80:'VIEW_AUDIT_LOG',
        0x4000000:'CHANGE_NICKNAME',
        0x8000000:'MANAGE_NICKNAMES',
        0x10000000:'MANAGE_ROLES',
        0x20000000:'MANAGE_WEBHOOKS',
        0x40000000:'MANAGE_EMOJIS',
        // Channel 
        0x400:'VIEW_CHANNEL',
        // Text Channels
        0x800:'SEND_MESSAGES',
        0x1000:'SEND_TTS_MESSAGES',
        0x2000:'MANAGE_MESSAGES',
        0x4000:'EMBED_LINKS',
        0x8000:'ATTACH_FILES',
        0x10000:'READ_MESSAGE_HISTORY',
        0x20000:'MENTION_EVERYONE',
        0x40000:'USE_EXTERNAL_EMOJI',
        // Voice Channels
        0x100000:'CONNECT',
        0x200000:'SPEAK',
        0x400000:'MUTE_MEMBERS',
        0x800000:'DEAFEN_MEMBERS',
        0x1000000:'MOVE_MEMBERS',
        0x2000000:'USE_VAD',
        0x100:'PRIORITY_SPEAKER'
    }
}