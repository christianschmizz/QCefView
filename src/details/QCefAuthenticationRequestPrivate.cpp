#include "QCefAuthenticationRequestPrivate.h"

#include <QCefAuthenticationRequest.h>

QSharedPointer<QCefAuthenticationRequest>
QCefAuthenticationRequestPrivate::create(/*CefRefPtr<CefBrowser> browser,
                                         const CefString& origin_url,
                                         bool isProxy,
                                         const CefString& host,
                                         int port,
                                         const CefString& realm,
                                         const CefString& scheme,
                                         CefRefPtr<CefAuthCallback> callback*/)
{
  /*
  QUrl originUrl(QString::fromStdString(origin_url), QUrl::TolerantMode);

  QUrl url("");
  url.setHost(QString::fromStdString(host));
  url.setPort(port);
  url.setScheme(QString::fromStdString(scheme));
*/
  auto request = QSharedPointer<QCefAuthenticationRequest>(new QCefAuthenticationRequest(), &QCefAuthenticationRequestPrivate::destroy);
/*
  auto p = request->d_ptr.data();
  p->originUrl = originUrl;
  p->url = url;
  p->realm = QString::fromStdString(realm);
  p->isProxy = isProxy;
  p->callback = callback;
  */
  return request;
}

void
QCefAuthenticationRequestPrivate::destroy(QCefAuthenticationRequest* request)
{
  if (!request)
    return;

  auto p = request->d_ptr.data();
  if (p && p->callback)
    p->callback->Cancel();

  delete request;
}
