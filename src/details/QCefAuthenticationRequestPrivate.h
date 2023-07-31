#ifndef QCEFVIEW_AUTHENTICATIONREQUESTPRIVATE_H
#define QCEFVIEW_AUTHENTICATIONREQUESTPRIVATE_H
#pragma once

#include <QSharedPointer>
#include <QString>
#include <QUrl>

#include <include/cef_browser.h>
#include <include/cef_auth_callback.h>

class QCefAuthenticationRequest;

class QCefAuthenticationRequestPrivate
{
public:
  QUrl originUrl;
  QUrl url;
  QString realm;
  bool isProxy;
  CefRefPtr<CefAuthCallback> callback;

public:
  static QSharedPointer<QCefAuthenticationRequest> create(/*CefRefPtr<CefBrowser> browser,
                                                          const CefString& origin_url,
                                                          bool isProxy,
                                                          const CefString& host,
                                                          int port,
                                                          const CefString& realm,
                                                          const CefString& scheme,
                                                          CefRefPtr<CefAuthCallback> callback*/);
  static void destroy(QCefAuthenticationRequest* request);
};

#endif // QCEFVIEW_AUTHENTICATIONREQUESTPRIVATE_H
