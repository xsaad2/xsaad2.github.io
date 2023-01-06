import { Component } from '@angular/core';
import * as fs from 'fs';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css'],
})
export class Task1Component {
  public fragen = [
    {
      titleQuestion:
        '1.1. Fachliche Argumentation über Erfolgsprinzipien des WWW',
      questions: [
        {
          q: '1.Mit welchen fachlichen Argumenten wurde das WWW-Proposal von TBL abgelehnt?',
          a: 'der Hauptgrund ist, dass die absichtliche Evolvierbarkeit mit Vagheit verwechselt wurde. sowie das Problem defekter Links, das als Rückschritt angesehen wurde.',
        },
        {
          q: '2.Was sind die fachlichen Argumente, warum das WWW dennoch ein Erfolg wurde?',
          a: 'Das World Wide Web (WWW) hat sich zu einem erfolgreichen System entwickelt, weil es eine einfache Möglichkeit darstellt, Informationen über das Internet zu teilen und weil es sehr benutzerfreundlich und offen für jedermann ist.',
        },
        {
          q: '3.Was wäre der Preis für die garantierte Verhinderung von “broken links”?',
          a: 'Der Preis für die Gewährleistung der referentiellen Integrität wäre, zu akzeptieren, dass eine zentrale Behörde den Nachweis übernimmt, ob ein Link defekt ist oder nicht, und dass wir dafür etwas Transparenz opfern müssen.',
        },
      ],
    },
    {
      titleQuestion: '1.2. HTTP',
      questions: [
        {
          q: '1.Sie bekommen im Browser den HTTP Status Code 200. Was bedeutet das?',
          a: 'Eine HTTP-Antwort mit dem Statuscode 200 bedeutet, dass die Anfrage des Benutzers erfolgreich war und dass der Server eine gültige Antwort geliefert hat.',
        },
        {
          q: '2.Sie bekommen im Browser den HTTP Status Code 301. Was hat das zu bedeuten?',
          a: 'Der Statuscode 301 wird häufig verwendet, wenn eine Website umgezogen wird oder wenn die URL einer Seite geändert wurde.',
        },
        {
          q: '3.Sie bekommen im Browser den HTTP Status Code 400. Was hat das zu bedeuten? Was können Sie dagegen tun?',
          a: 'Ein HTTP-Statuscode 400 bedeutet, dass die Anfrage des Benutzers von dem Server als ungültig betrachtet wurde, da sie einen Fehler enthält. Dies kann auf eine ungültige Syntax oder fehlende erforderliche Parameter in der Anfrage zurückzuführen sein. Um gegen einen HTTP-Statuscode 400 vorzugehen, sollte der Benutzer überprüfen, ob die Anfrage korrekt formuliert wurde und ob alle erforderlichen Parameter enthalten sind. Wenn möglich, sollte auch überprüft werden, ob es Probleme mit der Verbindung gibt oder ob der Server möglicherweise down ist.',
        },
        {
          q: '4.Sie bekommen im Browser den HTTP Status Code 403. Was hat das zu bedeuten? Was können Sie dagegen tun?',
          a: 'Ein HTTP-Statuscode 403 bedeutet, dass der Server die Anfrage des Benutzers zwar verarbeiten konnte, aber dem Benutzer keinen Zugriff auf den angeforderten Inhalt gewähren kann. Dies kann aus verschiedenen Gründen geschehen, wie zum Beispiel, weil der Benutzer nicht über die erforderlichen Berechtigungen verfügt oder weil der Zugriff auf den Inhalt aus Sicherheitsgründen eingeschränkt ist. Um gegen einen HTTP-Statuscode 403 vorzugehen, könnten Sie versuchen, sich mit gültigen Anmeldeinformationen anzumelden ',
        },
        {
          q: '5.In einer Webanwendung benötigen Sie eine OPTIONS-Anfrage, die die Optionen des Servers vor dem eigentlichen Zugriff erfragen soll. Aus Performanzgründen soll die Abfrage jedoch cacheable sein. Wie könnten Sie dafür eine Lösung angehen?',
          a: 'Um eine OPTIONS-Anfrage cacheable zu machen, könnten Sie den Cache-Control-Header in der Antwort des Servers setzen. Der Cache-Control-Header gibt an, ob und wie lange die Antwort gecached werden darf. Eine mögliche Lösung wäre, den Cache-Control-Header mit dem Wert "public" zu setzen, um anzugeben, dass die Antwort von jedem Client oder Proxy-Server gecached werden darf. Sie könnten auch den Wert "max-age" verwenden, um anzugeben, wie lange die Antwort gecached werden darf, bevor sie veraltet ist und erneut abgerufen werden muss. Hier ist ein Beispiel für den Cache-Control-Header, der in der Antwort auf eine OPTIONS-Anfrage gesetzt werden könnte: Cache-Control: public, max-age=3600 Dieser Header würde angeben, dass die Antwort für alle Clients und Proxy-Server gecached werden darf und dass sie für eine Stunde gültig ist, bevor sie erneut abgerufen werden muss.Es gibt noch weitere Möglichkeiten, wie der Cache-Control-Header verwendet werden kann, um die Caching-Verhalten von Anfragen zu steuern. Es empfiehlt sich, die Dokumentation der HTTP-Protokolls zu lesen, um mehr darüber zu erfahren.',
        },
      ],
    },
    {
      titleQuestion: '1.3.-1.4 HTML-Wireframe',
      questions: [
        {
          q: '1.Was ist HTML?',
          a: 'HTML (HyperText Markup Language) ist eine Standardsprache für das Verfassen von Webseiten. Es wird verwendet, um die Struktur und den Inhalt von Webseiten zu beschreiben und besteht aus einer Reihe von Markup-Tags, die verwendet werden, um verschiedene Elemente wie Text, Bilder und Links darzustellen.',
        },
        {
          q: '2.Wie kann man eine geschachtelte geordnete Liste der Schachtelungstiefe 3 erzeugen?',
          a: 'Um eine geschachtelte geordnete Liste der Schachtelungstiefe 3 in HTML zu erstellen, können Sie die HTML-Listenelemente <ol> (ordered list) und <li> (list item) verwenden. Die Schachtelungstiefe kann durch das Verschachteln von Listenelementen innerhalb von anderen Listenelementen erreicht werden.',
        },
        {
          q: '3.Using Html',
          a: '',
          wireframe: true,
        },
      ],
    },
  ];
  openFrame(): void {
    window.open('assets/frames/wireframe1.html');
  }
}
