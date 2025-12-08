namespace SpriteKind {
    export const objeto_colision = SpriteKind.create()
    export const colision_menu_principal = SpriteKind.create()
    export const colisionBoton = SpriteKind.create()
    export const manoSeleccion = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.manoSeleccion, SpriteKind.colisionBoton, function (sprite, otherSprite) {
    if (controller.A.isPressed() && otherSprite == botonbannerinicio) {
        menuseleccionpartida(true)
    }
    if (controller.A.isPressed() && otherSprite == botonseleccionjuego) {
        escenario1(true)
    }
    if (controller.A.isPressed() && otherSprite == botonseleccionjuego2) {
    	
    }
    if (controller.A.isPressed() && otherSprite == botonseleccionjuego3) {
        menuseleccionpartida(true)
    }
})
function crear_menu_inicial (booleano: boolean) {
    destruirescenario(true)
    music.play(music.createSong(hex`0078000408020105001c000f0a006400f4010a0000040000000000000000000000000000000002470000000400012408000c0001241000140002202418001c000124200024000320222428002c0001242c00300001243000340001243400380002202438003c000220243c0040000124`), music.PlaybackMode.LoopingInBackground)
    botonbannerinicio = sprites.create(img`
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ...........5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555............
        ...........5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555............
        ..........d5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555............
        ..........d5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555............
        ..........d5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555............
        ..........d5ffffff11111f11fff11f1111f1111f11111f11111f1111fffff1111f11111f111ff1111f11f1111ff11111fffffff555............
        ..........d5ffffff11111f11fff11f1111f1111f11111f11111f11111ffff1111f11111f1111f1111f11f11111f11111fffffff555............
        ..........d5ffffff111fff1111111f11f1f11fffff111f11f11f1ff11ffff11f1f11f11f1f11ff11ff11f1ff11f11f11fffffff555............
        ..........d5ffffff11111f1111111f1111f1111ff111ff11f11f1ff11ffff1111f11f11f1f11ff11ff11f1ff11f11f11fffffff555............
        ..........d5ffffff11111f1111111f1111f1111ff111ff11f11f11111ffff1111f11f11f111fff11ff11f1ff11f11f11fffffff555............
        ..........d5ffffff111fff11f1f11f11fff11fff111fff11111f1111fffff11fff11111f1111ff11ff11f1ff11f11111fffffff555............
        ..........d5ffffff111fff11fff11f11fff11fff111fff11111f1f11fffff11fff11111f1f11ff11ff11f1ff11f11f11fffffff555............
        ..........d5ffffff11111f11fff11f11fff1111f11111f11f11f1ff1fffff11fff11f11f1f11ff11ff11f1111ff11f11fffffff555............
        ..........d5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555............
        ..........d5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555............
        ..........d5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555............
        ...........5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555............
        ...........5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555............
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        `, SpriteKind.colisionBoton)
    botonbannerinicio.setPosition(77, 105)
    scene.setBackgroundImage(img`
        c8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888a888888888.
        888888888888888888888888888888888888888888888888888ca888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888a888888888.
        888888888888888888888888888888888888888888888888888abc88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ccbdbc8888888.
        8888888888888888888888888888888888888888888888888888c888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ca313ac888888.
        888888888888888888888888888888888888888c888888888888888888888888888888888888888888888888888888888888888b88888888888888888888888888888888888888888888cbc88888888.
        888888888888888888888888888888888888888c8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888a888888888.
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888.
        888888888888888888888a88888888888888888888888888888888888888888888888888888888888cb8888888888888888888888888888888888888888888888888888888888888888888888888888.
        88888888888888888888ca88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888.
        888888888888888888caddbc8888888888888888888888c888888888c88c88888c88888888ccccccc88888888c8888cc88cccc88888cc88888888888888888888888888888888888888888888888888.
        888888888888888888caddbc888888888888888888888ccbbbbbbbbbccc8bbbbbcc888888ccbbbbb8c88888cccbbbbb8c8cbbbbbbbbb8c8888888888888888888888888888888888888888888888888.
        88888888888888888888cb8888888888888888888888ccb111111111dc8811111c888888c8c1111db8c888cccb1111d88bd111111111b8c888888888888888888888888888888888888888888888888.
        888888888888888888888a888888888888888888888ccb11111111111dc811111c8888888cc111111ccc88ccb11111d8bd11111111111bcc88888888888888888888888888888888888888888888888.
        888888888888888888888888888888888888888888c8b1111111111111d811111c88888888c111111d8c8c8d111111d811111111111111cc88888888888888888888888888888888888888888888888.
        888888888888888888888888888888888888888888c8b1111ddddd1111d811111c88888888c111111dcccccd111111d811111ddddd1111cc88888888ccccccccccc8ff8888888888888888888888888.
        888888888888888888888888888888888888888888c8b1111b888c1111d811111c88888888c1111111d8c8b1111111d811111c888d1111cc88fffccbd111111111dbccfff8888888888888888888888.
        888888888888888888888888888888888888888888c8b1111b8ccc1111d811111c88888888c1111111d8ccb1111111d811111ccc8d1111ccc8cbbd111111111111111dbbcf888888888888888888888.
        888888888888888888888888888888888888888888c8b1111b8ccc1111d811111c88888888c1111111d88b11111111d811111ccc8d1111ccc69111111111111111111111dcff8888888888888888888.
        888888888888888888888888888888888888888888c8b1111b8c8c1111d811111c88888888c1111111118b11111111d811111ccc8d1111ccb1111111111111111111111119d6f888888888888888888.
        888888888888888888888888888888888888888888c8b1111b8ccc1111d811111c88888888c1111111111111111111d811111ccc8d1111ccb111111111111111111111111111bc88888888888888888.
        88c888888888888888888888888888888888888888c8b1111b8ccc1111d811111c88888888c11111d1111111dd1111d811111ccc8d1111ccbbbbbbbd111111111111111111111bc8888888888888888.
        88c888888888888888888888888888888888888888c8b1111b8ccc1111d811111c88888888c1111d8d111111cc1111d811111ccc8d1111cccffffffcbbd1111111111111111111bc888888888888888.
        888888888888888888888888888888888888888888c8b1111b8ccc1111d811111c88888888c1111d81111111cc1111d811111ccc8d1111cc8888888fffcccd11111111111111111dcf8888888888888.
        888888888888888888888888888888888888888888c8b1111b8ccc1111d811111c88888888c1111d81111111cc1111d811111ccc8d1111cc8888888888888c911111111111111111dcf888888888888.
        888888888888888888888888888888888888888888c8b1111b888c1111d811111c88888888c1111d81111111cc1111d811111c888d1111cc88888888888888ccb91111111111111119bf88888888888.
        888888888888888888888888888888888888888888c8b1111dbbbd1111d811111c88888888c1111d8cd1111c8c1111d811111dbbbd1111cc8888888888888888c69111111111111111dc88888888888.
        888888888888888888888888888888888888888888c8b1111111111111d811111c88888888c1111d88d111188c1111d811111111111111cc888888888888888888c9111111111111111bc8888888888.
        888888888888888888888888888888888888888888c8b1111111111111d811111c88888888c1111d88d111188c1111d811111111111111cc8888888888888888888c9111111111111111bf888888888.
        888888888888888888888888888888888888888888c8b1111111111111d811111c88888888c1111d88b111b88c1111d811111111111111cc88888888888888888888cb11111111111111df888888888.
        888888888888888888888888888888888888888888c8b1111dbbbb1111d811111c8cccccc8c1111d888bbb888c1111d811111dbbbd1111cc888888888888888888888cb1111111111111d6f88888888.
        888888888888888888888888888888888888888888c8b1111b888c1111d811111c88888888c1111d8cc88ccc8c1111d811111c888d1111cc8888888888888888888888cd1111111111111df88888888.
        888888888888888888888888888888888888888888c8b1111b8ccc1111d811111ddddddddcc1111d8c88888c8c1111d811111ccc8d1111cc8888888888888888888888cb9111111111111dff8888888.
        888888888888888888888888888888888888888888c8b1111b8ccc1111d81111111111111cc1111d8c88888c8c1111b811111ccc8d1111cc888888888888888888888888c1111111111111bf8888888.
        888888888888888888888888888888888888888888c8b1111b8ccc1111d8cd11111111111cc1111d8c88888c8c1111d811111ccc8d1111c8888888888888888888888888f1111111111111df8888888.
        888888888888888888888888888888888888888888c8b1111b8ccc1111d88cd1111111111cc1111d8c88888c8c1111d811111ccc8d1111c8888888888888888888888888f9111111111111df8888888.
        8888888888888888888888888888888888888888888ccbbbbcccccbbbbcccccbbbbbbbbbb88bbbbc8c888888ccbbbbc8bbbbbcccccbbbbcc8888888888888888888888888c111111111111df8888888.
        88888888888888888888888888888888888888888888ccccccc88ccccccc88ccccccccccccccccccc88888888ccccccccccccc88ccccccc88888888888888888888888888cd11111111111df8888888.
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fb11111111111df8888888.
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888c11111111111df8888888.
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888c11111111111df8888888.
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888c11111111119bf8888888.
        88888888888888888888888888888888888888888888888888888888888ca88888888888888888888888888888888888888888888888888888b88888888888888888888888c1111111111df88888888.
        88888888888ca8888888888888888888888888888888888888888888888a3c8888888888888888888888888888888888888888888888888888888888888888888888888888c1111111111df88888888.
        88888888888abc8888888888888888888888888888888888888888888888c88888888888888888888888888888888888888888888888888888888888888888888888888888c111111111dcf88888888.
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888c111111111df888888888.
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888c111111111bf888888888.
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888c11111119bc8888888888.
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fb1111111df88888888888.
        8888888888888888888888888888888888888888c888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fd111111d6f88888888888.
        888888888888888888888888888888888888888c3a88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888c111111dcf888888888888.
        8888888888888888888888888888888888888888ac8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888cd11111bc88888888888888.
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888c11111bc888888888888888.
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888c61111bc8888888888888888.
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888cb111dbc88888888888888888.
        888888888888888888c8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888c11dbcf8888888888888c8888.
        888888888888888888c88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fcd1dcff88888888888888c8888.
        888a3c8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886bccc8888888888888888888888.
        888ca8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ff8888888888888888888888888.
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888.
        8888888888888888888888888888888888888888888888cb888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888.
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888.
        88888888888888888888888888888888888888888888888888b888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888.
        88888888888888888888888888888888888888888888888888c888888888888888888888888888888888a88888888888888888888888888888888888888888888888888888888888888888888888888.
        88888888888888888888888888888888888888888888888888888888888888888888888888888888888a3a8888888888888888888888888888888888888888888888888888888888888888888888888.
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888a88888888888888888888888888888888888888888888888888888888888888888888888888.
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888.
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888.
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888.
        888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888b88888888888888888888.
        8888888888888888888888888888888888888888888888fff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888.
        888888888888888888888888888888888888888888888fc4ef8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888.
        888888888888888888888888888888888888888888888fe544cf88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888.
        88888888888888888888888888888888888888888888fe45544ecff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888.
        88888888888888888888888888888888888888888888c45555544ecff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888.
        888888888888888888888888888888888888888888fc455555555444ef88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888.
        88888888888888888cb88888888888888888888888fe5555555555444ef8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888.
        88888888888888888888888888888888888888888fc455555555554444ef8888888888888888888888888888888888888888888888888888888ca888888888888888888888888888888888888888888.
        88888888888888888888888888888888888888888fe5555555555554444ec888888888888888888888888888888888888888888888888888888abc88888888888888888888888888888888888888888.
        88888888888888888888888888888888888888888c455555555555544444ef8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888.
        8888888b88888888888888888888888888888888fe5555555555554444444ef88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888c.
        8888888888888888888888888888888888888888fe5555555555444444444ef888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888.
        8888888888888888888888888888888888888888fe555555544444efffce4ef888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888.
        8888888888888888888888888888888888888888fe555554eeefffffffffeef88888f888888888888888888888888888888888888888888888888888888888888888888888b88888888888888888888.
        8888888888888888888888888888888888888888fe45444cfffffcffffffecf8888cecf8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888.
        88888888888888888888888888888888888888888fe44efffff8e4cfffeecf8888fe4ef8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888.
        ff888888888ff8888888888888888888888888888fe44fffffffc44efecf88888fc454ef888888888888888888888888888888888888888888888888888888888888888888888888888888888888888.
        ffff8888888ff88888888888888888888888888888fe4efcfceeee44ef888888fc4554ef888888888888888888888888888888888888888888888888888888888888888888888888888888888888888.
        fffff888888fff88888888888888888888888888888fceeeeefffc444ef88888fe55544ec88888888888888888888888888888888888888888888888888888888888888888888888888888888888888.
        fffffff888ffff888888888888888888888888888888ffffff888fc444ff888fe4555544ec8888888888888888888888888888888888888888888888888888888888888888888888888888888888888.
        fffffff88cfffff888888888888888888888c888888888888888888fe4ef888c455555444ef88888888888888888888888888a88888888888888888888888888888888888888888888888888888888f.
        fffffffffffffff88888888888888888888a3c88888888888888888fc44ef8fe4555555444ef888888888888888888888888bbc888888888888888888888888888888888888888888888888888888ff.
        fffffffffffffff88888888888888888888ca8888888888888888888fe4effc45555555444ef8888888888888888888888abdd3ac888888888888888888888888888888888888888888888888888fff.
        fffffffffffffff88888888888888888888888888888888888888888fc44efe555555555444ef8888888888888888888888cbda8888888888888888888888888888888888888888888888888888ffff.
        fffffffffffffff888888888888888888888888888888888888888888fe44ee555555555444ef888888888888888888888888a8888888888888888888888888888888888888888888888888888fffff.
        fffffffffffffff888888888888888888888888888888888888ccf8888c4ee4555555555444ecf888888888888888888888888888888888888888888888888888888888888888888888888888ffffff.
        fffffffffffffff888888888888888888888888888888888fce44cf888feee55555555544444ef88888888888888888888b8888888888888888888888888888888888888888888888ff88888fffffff.
        fffffffffffffff88888888888888888888888888888888fc4554ef888fcee55555555444444ef88888888888888888888c88888888888888888888888888f888888888888888fffffff888ffffffff.
        ffffffffffffffff888888888ff88888888888888888ffc4455544e888fcee45544444444444ef8888888888888888888888888888888888888888888888ff88888888888888fffffffffffffffffff.
        fffffffffffffffff88888888fff888888888888888fe445555554ef888fceed4effffffe444ef8888888888888888888888888888888888888888888888ff8888888888888ffffffffffffffffffff.
        ffffffffffffffffff888888fefff8888888888888ce4555555554ef8888ffeeffffffffffeef88888888888888888888888888888888888888888888888ff8888888888888ffffffffffffffffffff.
        fffffffffffffffffff88ffcfffff8888888888888e45555555544ecf888feefefffeeffffecf8888888888888888888888888888888888888888888888fff888888888888ffeffffffffffffffffff.
        ffffffffffffffffffffffffffffff88888888888c4555555554444ef8888feeefffe4efffff8888888888888888888888888888888888888888888888fffff88888888888fffffffffffffffffffff.
        ffffffffffffffffffffffffffffff8888888888fe4554444444444ef8888fe44efe4effff888888888888888888888888888888888888888888888888fffffffffff88ffffffffffffffffffffffff.
        ffffffffffffffffffffffffffffff8888888888fe4efccffe44444ef8888fc44ef4ef888888888888888888888888888888888888888888888888888cfffffffffffffffffffffffffffffffffffff.
        fffffffffffffffffffffffffffffff888888888fceffffcfffc444ef88888fe4ee4ef888888888888888888888888888888888888888888888888888cfffffffffffffffffffffffffffffffffffff.
        ffffffffffffffffffffffffffffffff888888888fccffe4effffe4cf88888fcee4ef88888888888888888888888888888888888888888888888888ccffffffffffffffffffffffffffffffffffffff.
        ffffffffffffffffffffffffffffffff88888888888ffe44fffffecf888888ceee44cf888888888888888888888888888888888888888888888888fffffffffffffffffffffffffffffffffffffffff.
        fffffffffffffffffffffffffffffffff88888888888c4efffffff8888888fe44ee44ef8888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffffff.
        fffffffffffffffffffffffffffffffffff8888888ffeeff88888888ff88fc444efe44ef888888888888888888888888888888888888888888888fcffffffffffffffffffffffffffffffffffffffff.
        ffffffffffffffffffffffffffffffffffff888888fceff8888888888888fe444effe44ef888888888888888888888888888888888888888888ffefffffffffffffffffffffffffffffffffffffffff.
        ffffffffffffffffffffffffffffffffffffff8888fcef8888ff888ff88fe444ef88fc44ef88888888888888888888888888888888888888ccffeeffffffffffffffffffffffffffffffffcffffffff.
        fffffffffffffffffffffffffffffffffffffff888feef88ff8ff8fff8fc4444cf888fe4ecf888888888888f888888888888888888888ccceeffffffffffffffffffffffffffffffffffffbcfffffff.
        fffffffffffffffffffffffffffffffffffffffff8ffcf88ffffffff8fce4e4ef8888feeeef888888888fffffff88888888888888888ceefffffffffffffffffffffffffffffffffffffcbbbcffeeee.
        fefffffeefffffffffeefffffffffffffffffffff8fffcf88ffffffffcee4ecf8fff8fe44ef8888888fffceeecfff888888fff88fffffffffffffffffffffffeefffffffffffffffffffcbbbcce44ee.
        444effe44efffffffe44eeeeffffffffffffeffffffffffffffcffffffcefeefcefffceeeccff88ffffce44444ecffff8ffeecffffffffffffffffffffffffe44ecfffffffffffffffffe4deffceeef.
        4444effeecffceeffce44444eecffffffffe4ecffeefffefeeffffeefffffefffffcfeeeffffcffffe4444444eeeeefffc4444cfc44effffeeeffceeffeeeeeeeeffffffffffffffffce4eecffffffe.
        e44eefffffffe4eff8e4444eeecfcfffffffeeffeeeeffe44efffe4eefefffffefffffeffffffffffe444444eeeeeecfc4444eff444effe44efffeeeefe4eeefeefffeecffeeeffee4effe4444effe4.
        ffeefffe44effcffffc44ecec8ffffffffffffffeeefffceeeffffeeffffffffffffffffffffffffffee444eeeeecffff444efffe4efffeecfceeceeffeeeeffcfffc44efffccfe444eff44444effe4.
        fffffff44eefffffffffcc8ccffffffffffffefffffffffffcefffffffffffffffffffffffffffffffffccfffffffffffe4ecefffffffefffe444eeffffeeffeefffe4effffeecc4effffffeeffffff.
        fffffffeeefffffffffcccecffffffffffffe4efffffffffffffffffffffffffffffffffffffffffffffffcecfffffffffffe4effecfe4efe44eeeeffcfffffceffffefffffeeffffffffffffffffff.
        `)
    mano_seleccion = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 . . . . . . . . 
        . . . . . 8 1 8 . . . . . . . . 
        . . . . . 8 1 8 . . . . . . . . 
        . . . . . 8 1 8 8 8 8 8 . . . . 
        . . 8 8 8 8 1 8 1 8 1 8 8 8 . . 
        . . 8 1 1 8 1 1 1 1 1 1 1 8 8 . 
        . . 8 8 1 1 1 1 1 1 1 1 1 8 8 . 
        . . . 8 8 1 1 1 1 1 1 1 1 8 8 . 
        . . . . 8 8 1 1 1 1 1 1 1 8 . . 
        . . . . . 8 8 1 1 1 1 1 8 8 . . 
        . . . . . . 8 8 8 8 8 8 8 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.manoSeleccion)
    controller.moveSprite(mano_seleccion, 100, 100)
}
function destruirescenario (booleano: boolean) {
    sprites.destroyAllSpritesOfKind(SpriteKind.manoSeleccion)
    sprites.destroyAllSpritesOfKind(SpriteKind.colisionBoton)
    music.stopAllSounds()
}
function animacionjugador (booleano: boolean) {
	
}
function escenario1 (booleano: boolean) {
    destruirescenario(true)
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        fffffffc666666fffff66fffffffffffffffffffffff8bbbbbbbcfffffffffffff8fffffffffffff8bbbbbb96ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        fffffffc666666fffffffffffffffffffffffffffffc1999696666fffffffffffcf8fffffffffffc1999696666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        ffffffff66666ffffffffffffffffffffffffffffffb99666666668ffffffffff8f8fffffffffffb99666666668ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        fffffffffffffffffffffffffffffffffffffffffffb6666666666ffffffffffffcffffffffffffb6666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        ffff8bbbbbb96ffffffffffffffffffffffffffffffc6666666666ffffffffffff8ffffffffffffc6666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        fffc1999696666fffffffffffffffffffffffffffffc6666666666fffffffffffcf8fffffffffffc6666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        fffb99666666668fffffffffffffffffffffffffffff666666666ffffffffffff8f8ffffffffffff666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        fffb6666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        6ffc6666666666fffff66ff666666fffffffffffffff8bbbcffffff666666fffff8fffffffffffffffff8bb96ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        fffc6666666666fffffffff6fffffffffffffffffffc199666fffff6fffffffffcf8fffffffffffffffc199666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        ffff666666666ffffffffff6fffffffffffffffffffb9966668ffff6fffffffff8f8fffffffffffffffb9966668ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        fffffffffffffffffffffffffffffffffffffffffffb666666ffffffffffffffffcffffffffffffffffb666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        66666fff8bb96ffffffffff66ff666666ffffffffffc666666ffffffffffffffffcffffffffffffffffc666666fffffffff66ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        fffffffc199666fffffffffffff6fffffffffffffffc666666fffffffffffffff8ff88fffffffffffffc666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        fffffffb9966668ffffffffffff6ffffffffffffffff66666ffffffffffffffffcc9111cffffffffffff66666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        fffffffb666666ffffffffffffffffffffffffffffffffffffffffffffffffffff691119fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        6ffffffc666666fffff66fffffffffffffffffffffff8bbbbbbbcfffffffffff8f9b91196fffffff8bbbbbb96ffffffffff6666ffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        fffffffc666666fffffffffffffffffffffffffffffc1999696666ffffffffff9ccf99968ffffffc1999696666fffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        ffffffff66666ffffffffffffffffffffffffffffffb99666666668ffffffff8969b6f66fffffffb99666666668ffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        fffffffffffffffffffffffffffffffffffffffffffb6666666666fffffffff89cb66868fffffffb6666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        ffff8bbbbbb96ffffffffffffffffffffffffffffffc6666666666fffffffff89cc96ffffffffffc6666666666fffffffff66ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        fffc1999696666fffffffffffffffffffffffffffffc6666666666ffffffffff68bffffffffffffc6666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        fffb99666666668fffffffffffffffffffffffffffff666666666fffffffffff8f88ffffffffffff666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        fffb6666666666fffffffffffffffffffffffffffffffffffffffffffffffff96ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        fffc6666666666fffff66fffffffffffffffffffffff8bbbcfffffffffffff8bcffffff666666fffffff8bb96ffffffffff6666ffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        fffc6666666666fffffffffffffffffffffffffffffc199666fffffffffffffccffffff6fffffffffffc199666fffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        ffff666666666ffffffffffffffffffffffffffffffb9966668fffffffffff66fffffff6fffffffffffb9966668ffffffff6fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        fffffffffffffffffffffffffffffffffffffffffffb666666ffffffffffffbffffffffffffffffffffb666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        ffffffff8bb96ffffffffffffffffffffffffffffffc666666fffffffffff8ccfffffffffff666666ffc666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        fffffffc199666fffffffffffffffffffffffffffffc666666fffffffffff61cfffffffffff6fffffffc666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        fffffffb9966668fffffffffffffffffffffffffffff66666ffffffffffffffffffffffffff6ffffffff66666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        fffffffb666666fffffffffffffffffffffffffffffffffffffffffffffff89cfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        ffffff8cbbbbcbc888fffffffffffff666666fffffff8bbbbbbbcfffffffffffffffffffffffffff8bbbbbb96ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        fff8b91919999999968ffffffffffff6fffffffffffc1999696666fffffffc98fffffffffffffffc1999696666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        fffb969b9ffffffffa8ffffffffffff6fffffffffffb99666666668ffffffffffffffffffffffffb99666666668ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        fffc66969ffffffffa8ffffffffffffffffffffffffb6666666666ffffffffb9fffffffffffffffb6666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        6ffc66969ffffffffa8ffffffff666666ffffffffffc6666666666ffffffffc8fffffffffffffffc6666666666fffffffff66ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        fff866689ffffffffa8ffffffff6fffffffffffffffc6666666666fffffffffffffffffffffffffc6666666666fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        fff866686aaaaaaaa68ffffffff6ffffffffffffffff666666666fffffffffffffffffffffffffff666666666ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        fff8666866666666668ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff.
        666866686666666666866fffffffffffffffffffffff8bbbcfffffffffffffffffffffffffffffffffff8bb96ffffffffffffffffffffffffffffffffffffffffffff8ccbbbbbbbbbbbc8ffffffffff.
        fff8666866666666668ffffffffffffffffffffffffc199666fffffffffffffffffffffffffffffffffc199666ffffffffffffffffffffffffffffffffffffffffffff66668888888888fffffffffff.
        fff866686666666666cffffffffffffffffffffffffb9966668ffffffffffffffffffffffffffffffffb9966668fffffffffffffffffffffffffffffffffffffffffff8c888888888888fffffffffff.
        fff866686666666666cffffffffffffffffffffffffb666666fffffffffffffffffffffffffffffffffb666666fffffffffffffffffffffffffffffffffffffffffff6d88888888888888ffffffffff.
        fff8666c6666666666cffffffffffff666666ffffffc666666f666666ffffffffffffffffffffffffffc666666ffffffffffffffffffffffffffffffffffffffffff818888888888888888fffffffff.
        ffff666fa66666666afffffffffffff6fffffffffffc666666f6fffffffffffffffffffffffffffffffc666666ffffffffffffffffffffffffffffffffffffffffffbb8888888888888888fffffffff.
        ffff888faaaaaaaaaafffffffffffff6ffffffffffff66666ff6ffffffffffffffffffffffffffffffff66666fffffffffffffffffffffffffffffffffffffffffffc88888888888888886fffffffff.
        ffffffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbc88888888888888b8fffffffff.
        ffffffffe2ffffffffffffffffffffffffffffffffff8bbbbbbbcfffffffffffffffffffffffffff8bbbbbb96ffffffffffffffffffffffeeeeeeeeeeeeeeeecffff8688888888888886b8ffffc5555.
        ffffffffeffffffffffffffffffffffffffffffffffc1999696666fffffffffffffffffffffffffc1999696666ffffffffffffffffffffeeeeeeeeeeeeeeeeeecffffc8888888888886b8fffffebbbb.
        fffffffe52fffffffffffffffffffffffffffffffffb99666666668ffffffffffffffffffffffffb99666666668fffffffffffffffffcfcbbbbbbbbbbbbbbbbeecfffff8888888888c8fffffcee5555.
        fffffffcecfffbbb8ffffffffffffffffffffffffffb6666666666fffffffffffffffffffffffffb6666666666ffffffffffffffffff4ee5555555555555555544cffffffff8888ffffffffc4455555.
        fffffffcbb99bb886ffffffffffffffffffffffffffc6666666666fffffffffffffffffffffffffc6666666666fffffffffffff66fff544555555555555555555555555555555555555555555555555.
        fffffbccbccf866668fffffffffffffffffffffffffc6666666666fffffffffffffffffffffffffc6666666666ffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
        fffc99996686668bcfffffffffffffffffffffffffff666666666fffffffffffffffffffffffffff666666666fffffffffffffffffff7eec444c444c444c444c444c444c444c444c444c444c444c444.
        fffb66688686669966ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfcccfcccfcccfcccfcccfcccfcccfcccfcccfcccfccc.
        6ffc68866686c966f66f8fffffffffffffffffffffff699bcffffffffffffff666666fffffffffffffff8bb96ffffffffffffffffffffffc666666fffffffffffffff8f88f6f68ff666f868ffffffff.
        fffb68888688966f66899ffffffffffffffffffffff6199666fffffffffffff6fffffffffffffffffffc199666fffffffffffffffffffffc666666fffffffffffffff9986cf666f86ff8f68e2efffff.
        fffc66666688966f668968cffffffffffffffffffff99966668ffffffffffff6fffffffffffffffffffb9966668fffffffffffffffffffff66666ffffffffffffffc869866f669886666668efe2ffff.
        fffc688886886968f6f66ffffffffffffffffffffff9666666fffffffffffffffffffffffffffffffffb666666fffffffffffffffffffffffffffffffffffffffffff66f6f869688688886cffe2ffff.
        fffc6666668686668ffffffffffffffffffffffffff6666666fffffffff666666ffffffffffffffffffc666666fffffffff66fffffffffff8bbbcffffffffffffffffffff8666868666666cfefeeef2.
        fff86666668668f6f8fffffffffffffffffffffffff6666666fffffffff6fffffffffffffffffffffffc666666fffffffffffffffffffffc199666ffffffffffffffffff8f6f86686666668ffef2fee.
        fff866666686668888fffffffffffffffffffffffff666666ffffffffff6ffffffffffffffffffffffff66666ffffffffffffffffffffffb9966668fffffffffffffffff888866686666668fff2f2f2.
        fffc66666686668bcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb666666fffffffffffffffffffcb86668666666cffffffff.
        fff8666666c6661196ffffffffffffffffffffffffff699bbbbbcfffffffffffffffffffffffffff8bbbbbb96ffffffffffffffffffffffc666666ffffffffffffffffff691166686666668ffffffff.
        fff866666686c996f66f8ffffffffffffffffffffff61999696666fffffffffffffffffffffffffc1999696666fffffffffffffffffffffc666666fffffffffffffff8f66f699c68666666cfffec5cc.
        fff8666666c8969f69899ffffffffffffffffffffff999666666668ffffffffffffffffffffffffb99666666668fffffffffffffffffffff66666ffffffffffffffff99896f96988666666cffcc5ce5.
        fffc666666c8966f668988cffffffffffffffffffff96666666666fffffffffffffffffffffffffb6666666666fffffffffffffffffffffffffffffffffffffffffc889866f66988666666cec5eeee5.
        eeec66666aca69cffffffceeeeeeeeeeeeeeeeeeeee66666666666fffffffffffffffffffffffff66666666666fccccccceeeeeeeeeeeeef8bbbbbbbcffffffffffffffffffc96a86666668f5c5eecc.
        eeec66666acac6affffeeeeeeeeeeeeeeeeeeeeeeee66666666666fffffffffffffffffffffffff66666666666fccccceeeeeeeeeeeeeeec1999696666fffffffffffffffffa6ca8666666ccfeeffff.
        bbbca66aaacaaffffffeeeebbbbbbbbbbbbbbbbbbbb6666666666ffffffffffffffffffffffffff6666666666ffcccebbbbbbbbbbbbbbbbb99666666668ffffffffffffffffffaa8666666cee55ffff.
        555caaaaaacaaaffff4555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffff45555555555555555555b6666666666ffffffffffffffffffaaa8666666cceffffff.
        555eeccaaacfaccee5555555555555555555555555555555555555555555555555544555555555555555555555545555555555555555555c6666666666fffffffffffffffccaaaac66666acffffffff.
        bbbbbbefffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeebbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbc6666666666fffffffffffffffaaaaaac6666aacffffffff.
        555555555555555555555555555555555555555555555555555555555555555555445555555555555554555555555445555555555555555f666666666fffffffffffffffcaaaaaacaaaaaacffffffff.
        555555555555555555555555555555555555555555555555554555555555555555455555555555555554555555555554455555555555555ffffffffffffffffffffffffffaaaaaacaaaaaacffffffff.
        5555555555555555555555555555555555555555555555554d555555555555555455555555555555555445555555555554d555555555555555555555555555555555555554eccafcaaaccee55555555.
        555555555555555555555555555555555555555555555554555555555555555554555555555555555555455555555555554455555555555555555555555555555555555555554eeffee555555555555.
        5555555555555555555555555555555555555555555555455555555555555555455555555555555555554d5555555555555555555555555555555555555555555555555555555555555555555555555.
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4bbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    enemigo2(true)
    main_character.setPosition(141, 100)
}
function menuseleccionpartida (booleano: boolean) {
    destruirescenario(true)
    music.play(music.createSong(hex`0078000408020105001c000f0a006400f4010a0000040000000000000000000000000000000002470000000400012408000c0001241000140002202418001c000124200024000320222428002c0001242c00300001243000340001243400380002202438003c000220243c0040000124`), music.PlaybackMode.LoopingInBackground)
    scene.setBackgroundImage(img`
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccfb66bccf4444444444444444444444444444bccbb66bcfffeeeeeeeeeeeeeeeee4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccc66cbccf4444444444444444444444444444ecc666cbcffffeeeefeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccc66cbccf4444444444444444444444444444ecc666cbcffffeeeefeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccc66cbccf4444444444444444444444444444ecc666cbcffffeeeefeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccc66cbccf4444444444444444444444444444ecc666cbcffffeeeefeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccfccbccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccfccfffeeeeffeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccfbc6bccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccc6bcfffffffffeeeeeeeeeeeeffffffffffeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccfbc6bccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccc6bcfffffffffeeeeeeeeeeeeffffffffffeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4eeeeeefeeeeeeeecccb66bccf4444444444444444444444444444eccbb66bcffff4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeccc86cbccf4444444444444444444444444444ecccc6cccffffeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffeeeeeeeeccccccbccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccffffeffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffeeeeeeeeef
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffeeeeeeeeccccccbccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccccffffeffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffeeeeeeeeef
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffeeeeeeeeccfb66bccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccc66bcffffeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeef
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccb66bccf4444444444444444444444444444eccbb66bcfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeee
        eeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccbccf4444444444444444444444444444eccccccccfffeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeee
        eeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccbccf4444444444444444444444444444eccccccccfffeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeee
        eeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccbccf4444444444444444444444444444eccccccccfffeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeee
        eeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccbccf4444444444444444444444444444eccccccccfffeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeee
        ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccbccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccbcfffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffeeeeee
        ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccfb66bccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccc66bcffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffeeeeee
        ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccfb66bccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccc66bcffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccc66cbccf4444444444444444444444444444ecc6666bcffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccccbccf4444444444444444444444444444eccccccccffffeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccfcc6bccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccc6bcffffeffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccfcc6bccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccc6bcffffeffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccfcc6bccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccc6bcffffeffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccc66cbccf4444444444444444444444444444ecc666cbcffffeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccfcfbccf4444444444444444444444444444eccffcfccfffeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccfcfbccf4444444444444444444444444444eccffcfccfffeeeeffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeefffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccf6c6bccfcccccccccccccccccccccccccccceccccc6bcfffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef
        eeeeeeeeeeeeeeeefffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccf6c6bccfcccccccccccccccccccccccccccceccccc6bcfffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef
        eeeeeeeeeeeeeeeefffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccf6c6bccfcccccccccccccccccccccccccccceccccc6bcfffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebcfb66bccf4444444444444444444444444444bccbb66bcffffeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeee4eeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebcfb66bccf4444444444444444444444444444bccbb66bcffffeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeee4eeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebcfb66bccf4444444444444444444444444444bccbb66bcffffeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeee4eeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccc66cbccf4444444444444444444444444444ecc666cbcffffeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccfccbccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccfccffffeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeef
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccfccbccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeecccccfccffffeeeeeeeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeef
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffccfbc6bccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccccc6bcffffeeeeeeeeeeeeefffffffffeeeeeeeeeeeeeeeeeeeeeeeeefffff
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccfcc6bccf4444444444444444444444444444eccccc6bcffffeeeeeeeeeeeeeeee4eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc6688bccf4444444444444444444444444444ec66688bcffffeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc6688bccf4444444444444444444444444444ec66688bcffffeeeeeeeeeeeeeeeeeeeeeeeeeffeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc6966bccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeec66666bcffffeeeeeeeeeeeeeeeeeeeffffffffeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeecc6666cccfcccccccccccccccccccccccccccccc66666ccffffeeeeeeeeeeeeeeeeeffffffffffeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeecc6666cccfcccccccccccccccccccccccccccccc66666ccffffeeeeeeeeeeeeeeeeeffffffffffeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeecc6666cccfcccccccccccccccccccccccccccccc66666ccffffeeeeeeeeeeeeeeeeeffffffffffeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeecc6666cccfcccccccccccccccccccccccccccccc66666ccffffeeeeeeeeeeeeeeeeeffffffffffeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeec6666c68c6666666666666666666666666666666666c666c6666cffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeb9996666669999999999999999999999999999999966666669996ffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffeeeeeeeeeeffb99999999999999999999999999999999999999999999999999999cfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffeeeeeeeeeeffb99999999999999999999999999999999999999999999999999999cfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffffffeeeeeeeeeeeeb999999999999999999999999999999999999999999999999999996ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbb9999999999999999999999999999999999999999999999999999999cfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebb99999999999999999999999999999999999999999999999999999996ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebb99999999999999999999999999999999999999999999999999999996ffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefb9999999999999999999999999999999999999999999999999999999999ccfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeb999999999999999999999999999999999999999999999999999999999966fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeb999999999999999999999999999999999999999999999999999999999966fffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefb1999999999999999999999999999999999999999999999999999969666ccccfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeee
        eeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefb1999999999999999999999999999999999999999999999999999969666ccccfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeee
        eeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefb1999999999999999999999999999999999999999999999999999969666ccccfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffeeeeeeeee
        eee44454eeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecbbb6666666666666666666666666666666666666666666666666666666ccccffffeeeeeeeeeeeeeeeeeeeeeeeeeeeefe4e55eeeeeeefff
        eee44454eeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecbbb6666666666666666666666666666666666666666666666666666666ccccffffeeeeeeeeeeeeeeeeeeeeeeeeeeeefe4e55eeeeeeefff
        eee4eeecceeeee455eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffeeeeeeeeeeeeeeeeeeeeeeeeeeeee44eeccceeeee554
        eeee4ee444444eceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccffffbccfffffffffffffffffffffffffffffccfffffccfffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeef4ee444444eecee
        eeee4ee444444eceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccffffbccfffffffffffffffffffffffffffffccfffffccfffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeef4ee444444eecee
        eeee4ee455554454eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccffffbccfffffffffffffffffffffffffffffccfffffccffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4ee4555544454e
        eeee4ee455554454eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccffffbccfffffffffffffffffffffffffffffccfffffccffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4ee4555544454e
        eeee4ee45554554eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccffffbccffffffcccccccccccccccccccccccccfffffccfffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4eee5555454eee
        eee4eee455554ee4efeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccffffbccffffeeeeeeeeeeeeeeeeeeeeeeeecccfffffccfffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4e4e455554e44e
        eee4eee455554ee4efeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccffffbccffffeeeeeeeeeeeeeeeeeeeeeeeecccfffffccfffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee4e4e455554e44e
        eecee4ee4444e45e5feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeccffffbccffe44444444444444444444444444ecfffffccffffeeeeeeeeeecbbbcffffffeeeeeeeeeeeeeeefeee5c4454ee544e
        eecee4ee44e4555e5feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccf866bccff444444444444444444444444444ecfff66bcffffeeeeeeeefcddddbffffffeeeeeeeeeeeeeeefeee5fe44e45544e
        eecee4ee44e4555e5feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccf866bccff444444444444444444444444444ecfff66bcffffeeeeeeeefcddddbffffffeeeeeeeeeeeeeeefeee5fe44e45544e
        eecee4ee44e4555e5feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefccf866bccff444444444444444444444444444ecfff66bcffffeeeeeeeefcddddbffffffeeeeeeeeeeeeeeefeee5fe44e45544e
        eecee44eeee4444e5feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffccf866bccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc8866bcffffeeeeeeeeecddddbcfffffeeeeeeeeeeeeeeefeee5e4ee4444e4e
        eecee44eeee4444e5feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffccf866bccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc8866bcffffeeeeeeeeecddddbcfffffeeeeeeeeeeeeeeefeee5e4ee4444e4e
        eeeee44eee44444e5feeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffeeeecc8869bccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc8869bcffffeeeeeeeeebbbbbbcfffffeeeeeeeeeeeeeeefeee5eee44444e4e
        ffeeee444444e44eefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebc8899bccf4444444444444444444444444444ecc8869bcffffeeeeeeeeeccfffccfffffeeeeeeeeeeeeeeffeee4444444e44ee
        eeeeeeeeeeeecceffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc8899bccf4444444444444444444444444444ecc8869bcffffeeeeeeeeeccfffccfffffeeeeeeeeeeeeeeeeeeeeeeeeeefecfe
        eeeeeeeeeeeecceffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc8899bccf4444444444444444444444444444ecc8869bcffffeeeeeeeeeccfffccfffffeeeeeeeeeeeeeeeeeeeeeeeeeefecfe
        e4eeeee4ee4eecefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffcc8899bccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc8869bcffffeeeeeeeeeccfffccfffffeeeeeeeeeeeeee4eeeee44e44ecccfe
        eee44455555eeccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcc8899bccf444eeeeeeeeeeeeeeeeeeeeeeeeeecc8869bcffffeeeeeeeeeccfffccfffffeeeeeeeeeeeeeeee444455554eccffe
        eee44455555eeccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcc8899bccf444eeeeeeeeeeeeeeeeeeeeeeeeeecc8869bcffffeeeeeeeeeccfffccfffffeeeeeeeeeeeeeeee444455554eccffe
        eee44445555eeccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcc8899bccf5444444444444444444444444444ecc8869bcfffeeeeefeeeeccffcccfffffeeeeeeeeeeeeeeee454455554eccffe
        eeee45445544efcfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefcc8899bccf4444444444444444444444444444ecc8869bcfffeeeeffeeeeccfffccfffffeeeeeeeeeeeeffeeee54e4554ecfffe
        e4e444444444efefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffcc8899bccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc8869bcfffffffffeeeecccccccfffffeeeeeeefffffffee44e44445e4ffeee
        e4e444444444efefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffcc8899bccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc8869bcfffffffffeeeecccccccfffffeeeeeeefffffffee44e44445e4ffeee
        e4e444444444efefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffcc8899bccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc8869bcfffffffffeeeecccccccfffffeeeeeeefffffffee44e44445e4ffeee
        e4e444444444efefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffcc8899bccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc8869bcfffffffffeeeecccccccfffffeeeeeeefffffffee44e44445e4ffeee
        e4e454e454e4efceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefecc8899bccf4444444444444444444444444444ecc8869bcffffeeeeeeeeeefeecfeeeeeee2eeeeeeeeeeef4e455ee54ee4ffeee
        e4e4555e44e4efceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc8899bccf4444444444444444444444444444ecc8869bcffffeeeeeeeeeeee4cfeeeeeeeeeeeeeeefeeef4ee5554e44e4ffeee
        e4feeeeecec4efceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc8899bccf4444444444444444444444444444ecc8869bcffffeeeeeeeeeeeeefffeeeeeeeeeeeeeffeeef4eceeeeefee4ffeee
        e4feeeeecec4efceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc8899bccf4444444444444444444444444444ecc8869bcffffeeeeeeeeeeeeefffeeeeeeeeeeeeeffeeef4eceeeeefee4ffeee
        e55555555554ecffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc8899bccfccccccccccccccccccccccccccccecc8869bcffffeeeeeeeeeee5efffeeeeeeeffffffffeeef455555555554cffff
        efeeeefffffffcccefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc8899bccf4444444444444444444444444444bcc8869bcffffeeeeeeeeefeceeffeeeeeeeeeee4eeeeefffeeeeefffffffccee
        efeeeefffffffcccefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc8899bccf4444444444444444444444444444bcc8869bcffffeeeeeeeeefeceeffeeeeeeeeeee4eeeeefffeeeeefffffffccee
        efeeeefffffffcccefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc8899bccf4444444444444444444444444444bcc8869bcffffeeeeeeeeefeceeffeeeeeeeeeee4eeeeefffeeeeefffffffccee
        eefeeeeeee4ecffccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc8899bccf4444444444444444444444444444ecc8869bcffffeeeeeeeeeeeeefffeeeeeeeeeeeeeeeeeffefceeeeeee4cfffcf
        eee4444eee4effeecfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc8899bccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc8869bcffffeeeeeeeeeee4efffeeeeeeeeeeeeeeeefffeee4444e4e4ffceef
        eee4444eee4effeecfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc8899bccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc8869bcffffeeeeeeeeeee4efffeeeeeeeeeeeeeeeefffeee4444e4e4ffceef
        eee4444eee4effeecfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc8899bccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc8869bcffffeeeeeeeeeee4efffeeeeeeeeeeeeeeeefffeee4444e4e4ffceef
        eee4444eee4effeecfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc8899bccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc8869bcffffeeeeeeeeeee4efffeeeeeeeeeeeeeeeefffeee4444e4e4ffceef
        eee455544e4efececfeeecccccccccccccccccccccccccccccfccfccccc8896bccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc8866bcfffffffcccccefeeeffffeeeeeeeeeecfffffffee4555544e4ffeeef
        cee455554c4efeeccff888888888888888888888888888888ffccfc66bc8866bccf4444444444444444444444444444ecc8866bcffffffff88888cfff8fffff8888888888888888ee455554ee4ffeccf
        6ee45554ee4efeefcfffff888888888888888888888888888ccccc699bc8866bccf4444444444444444444444444444ecc8866bcffffcccf8888866688ff8888888888888888888ee45554eee4ffeeff
        6ee45554ee4efeefcfffff888888888888888888888888888ccccc699bc8866bccf4444444444444444444444444444ecc8866bcffffcccf8888866688ff8888888888888888888ee45554eee4ffeeff
        6ee4454e4e4efcefcffffff88888888888888888888888888cccc6699bcf886cccfeeeeeeeeeeeeeeeeeeeeeeeeeeeeecc8886ccfc66ccccc888888888888888888888888888888ee4454e44e4ffeeff
        6ee444e4544efceccfffffff888888888888888888888888ccccc699966cc666cccccccccccccccccccccccccccccccb6ccc66666696fcccf888888888888888888888888888888ece44e455e4ffeecf
        6ee444e4544efceccfffffff888888888888888888888888ccccc699966cc666cccccccccccccccccccccccccccccccb6ccc66666696fcccf888888888888888888888888888888ece44e455e4ffeecf
        6ee44e45544efefeeffffffff88888888888888888888888ceecc6999999999999999999999999999999999999999999999999999996ccccf888888888888888888888888888888cc44e4555e4ffecef
        6eeee455544efefeffffffff88888888888888888888888cceecc69999999999999999999999999999999999999999999999999999996ffeee88888888888888888888888888888ce4ee5555e4cceccf
        8ceee4444e4efefffffffff888888888888888888888888ffee6699999999999999999999999999999999999999999999999999999996cceeec8888888888888888888888888888ccee44444e4ccefff
        8ceee4444e4efefffffffff888888888888888888888888ffee6699999999999999999999999999999999999999999999999999999996cceeec8888888888888888888888888888ccee44444e4ccefff
        88ccccee4e4eeffffff888888888888888888888888888cecfe77ccccccccccccccccccccccccccccccccccccccccccccccccccccccccff4eee888888888888888888888888888888cccce44e4ccffff
        88ccccee4e4eeffffff888888888888888888888888888cecfe77ccccccccccccccccccccccccccccccccccccccccccccccccccccccccff4eee888888888888888888888888888888cccce44e4ccffff
        88ccccee4e4eeffffff888888888888888888888888888cecfe77ccccccccccccccccccccccccccccccccccccccccccccccccccccccccff4eee888888888888888888888888888888cccce44e4ccffff
        888888cccceccf88888888888888888888888888888888fe4efee4ff4eff4efc44efe4cfe4ffeeff4eeeeff4efe4efe4ffeeeff4eff4effe4ecc888888888888888888888888888888888ccceefc8888
        888888888868888888888888888888888888888888888ccfe4cff44ff44fc4efee4efe4ef44ff44fc4444efe4efe4efe4fff44fc4efe4eefe7ec88888888888888888888888888888888888886888888
        888888888868888888888888888888888888888888888ccfe4cff44ff44fc4efee4efe4ef44ff44fc4444efe4efe4efe4fff44fc4efe4eefe7ec88888888888888888888888888888888888886888888
        `)
    botonseleccionjuego = sprites.create(img`
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ...5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555..
        ...5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555..
        .55cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55.
        .55cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc55.
        .55cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc55.
        .55cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc55.
        .55cfffffff11111f11111f11ff1111f11111f1111f11f11111f11ff11f11111ff11111fffff11fff11f11ff11f11ff11f1111ff1111fff1ffffc55.
        .55cfffffff11111f11111f11ff1111f11111f1111f11f11111f11ff11f11111ff111111ffff11fff11f11ff11f111f11f1ff11f1111ff11ffffc55.
        .55cffffff11fff1f11ffff11ff11fff1fff1f1ff1f11f1fff1f11ff11f11111ff1111111fff11fff11f11ff11f111f11f1fff1f1ff1fff1ffffc55.
        .55cffffff11fff1f11ffff11ff11fff1fffff1ff1f11f1fff1f111f11f11f11ff11ff111fff111f111f11ff11f111111f1fff1f1ff1fff1ffffc55.
        .55cffffff1111fff11ffff11ff11fff1fffff1ffff11f1fff1f111f11f1fff1ff11ff111fff1111111f11ff11f111111f1fff1f1ff1fff1ffffc55.
        .55cffffffff11fff11111f11ff1111f1fffff1ffff11f1fff1f111111f1fff1ff1111111fff1111111f11ff11f111111f1fff1f1ff1fff1ffffc55.
        .55cffffffff111ff11111f11ff1111f1fffff1ffff11f1fff1f111111f1fff1ff1111111fff1111111f11ff11f11f111f1fff1f1ff1fff1ffffc55.
        .55cfffffffff11ff11ffff11ff11fff1fffff1ffff11f1fff1f11f111f1fff1ff111111ffff11f1f11f11ff11f11f111f1fff1f1ff1fff1ffffc55.
        .55cffffff1ff111f11ffff111f11fff1fff1f1ff1f11f1fff1f11ff11f11111ff11ff11ffff11fff11f11ff11f11ff11f1fff1f1ff1fff1ffffc55.
        .55cffffff11f111f11ffff111f1111f11111f1111f11f11111f11ff11f11f11ff11ff11ffff11fff11f111111f11ff11f1ff11f1111fff1ffffc55.
        .55cffffff111111f11111f111f1111f11111f1111f11f11111f11ff11f11f11ff11ff11ffff11fff11f111111f11ff11f1111ff1111ff111fffc55.
        .55cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc55.
        .55cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc55.
        .55cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc55.
        .55cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc55.
        .55cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55.
        ..55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555..
        ..55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555..
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        `, SpriteKind.colisionBoton)
    botonseleccionjuego.setPosition(77, 25)
    botonseleccionjuego2 = sprites.create(img`
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ...5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555..
        ...5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555..
        .55cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55.
        .55cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc55.
        .55cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc55.
        .55cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc55.
        .55cfffffff11111f11111f11ff1111f11111f1111f11f11111f11ff11f11111ff11111fffff11fff11f11ff11f11ff11f1111ff1111fff1111fc55.
        .55cfffffff11111f11111f11ff1111f11111f1111f11f11111f11ff11f11111ff111111ffff11fff11f11ff11f111f11f1ff11f1111ff11f11fc55.
        .55cffffff11fff1f11ffff11ff11fff1fff1f1ff1f11f1fff1f11ff11f11111ff1111111fff11fff11f11ff11f111f11f1fff1f1ff1ff1fff1fc55.
        .55cffffff11fff1f11ffff11ff11fff1fffff1ff1f11f1fff1f111f11f11f11ff11ff111fff111f111f11ff11f111111f1fff1f1ff1ffffff1fc55.
        .55cffffff1111fff11ffff11ff11fff1fffff1ffff11f1fff1f111f11f1fff1ff11ff111fff1111111f11ff11f111111f1fff1f1ff1fffff11fc55.
        .55cffffffff11fff11111f11ff1111f1fffff1ffff11f1fff1f111111f1fff1ff1111111fff1111111f11ff11f111111f1fff1f1ff1ffff111fc55.
        .55cffffffff111ff11111f11ff1111f1fffff1ffff11f1fff1f111111f1fff1ff1111111fff1111111f11ff11f11f111f1fff1f1ff1fff111ffc55.
        .55cfffffffff11ff11ffff11ff11fff1fffff1ffff11f1fff1f11f111f1fff1ff111111ffff11f1f11f11ff11f11f111f1fff1f1ff1fff11fffc55.
        .55cffffff1ff111f11ffff111f11fff1fff1f1ff1f11f1fff1f11ff11f11111ff11ff11ffff11fff11f11ff11f11ff11f1fff1f1ff1ff111fffc55.
        .55cffffff11f111f11ffff111f1111f11111f1111f11f11111f11ff11f11f11ff11ff11ffff11fff11f111111f11ff11f1ff11f1111ff11ffffc55.
        .55cffffff111111f11111f111f1111f11111f1111f11f11111f11ff11f11f11ff11ff11ffff11fff11f111111f11ff11f1111ff1111ff11111fc55.
        .55cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc55.
        .55cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc55.
        .55cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc55.
        .55cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc55.
        .55cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55.
        ..55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555..
        ..55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555..
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        `, SpriteKind.colisionBoton)
    botonseleccionjuego2.setPosition(77, 60)
    botonseleccionjuego3 = sprites.create(img`
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ...5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555..
        ...5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555..
        .55cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55.
        .55cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc55.
        .55cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc55.
        .55cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc55.
        .55cfffffff11111f11111f11ff1111f11111f1111f11f11111f11ff11f11111ff11111fffff11fff11f11ff11f11ff11f1111ff1111fff1111fc55.
        .55cfffffff11111f11111f11ff1111f11111f1111f11f11111f11ff11f11111ff111111ffff11fff11f11ff11f111f11f1ff11f1111ff11ff1fc55.
        .55cffffff11fff1f11ffff11ff11fff1fff1f1ff1f11f1fff1f11ff11f11111ff1111111fff11fff11f11ff11f111f11f1fff1f1ff1ff1fff1fc55.
        .55cffffff11fff1f11ffff11ff11fff1fffff1ff1f11f1fff1f111f11f11f11ff11ff111fff111f111f11ff11f111111f1fff1f1ff1ff1fff1fc55.
        .55cffffff1111fff11ffff11ff11fff1fffff1ffff11f1fff1f111f11f1fff1ff11ff111fff1111111f11ff11f111111f1fff1f1ff1fffff11fc55.
        .55cffffffff11fff11111f11ff1111f1fffff1ffff11f1fff1f111111f1fff1ff1111111fff1111111f11ff11f111111f1fff1f1ff1fffff11fc55.
        .55cffffffff111ff11111f11ff1111f1fffff1ffff11f1fff1f111111f1fff1ff1111111fff1111111f11ff11f11f111f1fff1f1ff1ff1111ffc55.
        .55cfffffffff11ff11ffff11ff11fff1fffff1ffff11f1fff1f11f111f1fff1ff111111ffff11f1f11f11ff11f11f111f1fff1f1ff1fffff11fc55.
        .55cffffff1ff111f11ffff111f11fff1fff1f1ff1f11f1fff1f11ff11f11111ff11ff11ffff11fff11f11ff11f11ff11f1fff1f1ff1ff1fff1fc55.
        .55cffffff11f111f11ffff111f1111f11111f1111f11f11111f11ff11f11f11ff11ff11ffff11fff11f111111f11ff11f1ff11f1111ff11ff1fc55.
        .55cffffff111111f11111f111f1111f11111f1111f11f11111f11ff11f11f11ff11ff11ffff11fff11f111111f11ff11f1111ff1111fff1111fc55.
        .55cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc55.
        .55cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc55.
        .55cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc55.
        .55cffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc55.
        .55cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc55.
        ..55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555..
        ..55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555..
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        ........................................................................................................................
        `, SpriteKind.colisionBoton)
    botonseleccionjuego3.setPosition(77, 90)
    mano_seleccion = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 8 8 8 . . . . . . . . 
        . . . . . 8 1 8 . . . . . . . . 
        . . . . . 8 1 8 . . . . . . . . 
        . . . . . 8 1 8 8 8 8 8 . . . . 
        . . 8 8 8 8 1 8 1 8 1 8 8 8 . . 
        . . 8 1 1 8 1 1 1 1 1 1 1 8 8 . 
        . . 8 8 1 1 1 1 1 1 1 1 1 8 8 . 
        . . . 8 8 1 1 1 1 1 1 1 1 8 8 . 
        . . . . 8 8 1 1 1 1 1 1 1 8 . . 
        . . . . . 8 8 1 1 1 1 1 8 8 . . 
        . . . . . . 8 8 8 8 8 8 8 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.manoSeleccion)
    controller.moveSprite(mano_seleccion, 100, 100)
}
let mano_seleccion: Sprite = null
let botonseleccionjuego3: Sprite = null
let botonseleccionjuego2: Sprite = null
let botonseleccionjuego: Sprite = null
let botonbannerinicio: Sprite = null
crear_menu_inicial(true)
